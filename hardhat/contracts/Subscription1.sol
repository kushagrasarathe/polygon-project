// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// - A Subscription service is started
// -  Payment can be deducted after a period of 30 days , and anyone can trigger it
// - Payment is done from a particular ERC20 token , and approval needs to be given by payee

///  instance of an ERC20 token , which allows the function like transfer and approve
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/IERC20.sol" ;

interface NFT {
    function mint(address user, uint256 tokenId) external;

    function balanceOf(address user, uint256 tokenId) external;
}

contract SubscriptionPlan {
    // IERC20 token;
    address public owner;
    // uint256 public frequency;
    // uint256 public amount ;
    /// frequency of payment

    NFT nft;

    uint256 totalCreators = 0;

    struct Plan {
        address creator;
        uint256 amount;
        uint256 frequency;
    }

    struct Subscription {
        address subscriber;
        uint256 planId;
        uint256 start;
        uint256 nextPayment;
    }
    /// intialize a subscriptions for a creator
    /// mapping from user address-->creator address--> Subscription taken
    mapping(address => mapping(address => Subscription)) public subscriptions;

    /// mapping from creator --> planID --> Plan
    mapping(address => mapping(uint256 => Plan)) public plans;

    //mapping from the creator id to the creator address
    // marked private for now , so can be accesses only inside the contract
    mapping(uint256 => address) private creators;

    // mapping from creator address --> balance
    mapping(address => uint256) balances;
    uint256 planId = 0;

    // 0 --> Silver NFT
    // 1 --> Gold NFT
    // 2 --> Platinum NFT

    /// events for subscription creation , cancellation and payment
    event subscriptionCreated(address subscriber, uint256 date);

    event subscriptionCancelled(address subscriber, uint256 date);

    event paymentSent(address from, address to, uint256 amount, uint256 date);

    /// costructor to take all the details needed for a subscription plan
    constructor(address nftContract) payable {
        nft = NFT(nftContract);
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not owner");
        _;
    }

    modifier onlyCreator(uint256 _id) {
        require(creators[_id] == msg.sender, "You are not a creator");
        _;
    }

    /// @dev - to addCreator to the platform
    /// @param _creator - address of the creator to be added
    /// only owner can call this function
    function addCreator(address _creator)
        public
        onlyOwner
        returns (uint256 _id)
    {
        require(_creator != address(0), "Please enter a valid address");
        /// check if he is already there or not
        // creators.push(_creator)
        creators[totalCreators] = _creator;
        uint256 id = totalCreators;
        totalCreators += 1;
        /// length of the array or the id of creator
        return id;
    }

    /// @dev - to create plans
    /// @param id - id of the creator
    function createPlan(
        uint256 id,
        uint256 planAmount,
        uint256 frequency
    ) public onlyOwner onlyCreator(id) onlyOwner onlyCreator {
        require(planAmount > 0, "The amount for the plan should be > 0 ");
        require(frequency > 0, "Time peroid should be > 0");
        plans[planId] = Plan(creators[id], planAmount, frequency);
    }

    /// @dev to subscribe for the plan
    /// @param _creator -  address of the creator to be subscribed for
    /// @param _planId - Plan to be subscribed
    function subscribe(address _creator, uint256 _planId) external {
        Plan memory _plan = plans[_creator][_planId];
        uint256 amount = _plan.amount;
        uint256 _frequency = _plan.frequency;
        require(msg.value == amount, "Incorrect Amount");
        // contract recieved the amount
        balances[_creator] += amount;
        emit paymentSent(msg.sender, _creator, amount, block.timestamp);
        subscriptions[msg.sender] = Subscription(
            msg.sender,
            _planId,
            block.timestamp,
            block.timestamp + 30 days
        );
        /// will mint the NFT right after the adding to subscriptions list
        nft.mint(msg.sender, _planId);
        emit subscriptionCreated(msg.sender, block.timestamp);
    }

    /// @dev to cancel the subscription plan
    /// @param _creator -  address of the creator for which the plan is to be cancelled
    /// @param _planId - Id of the plan to be cancelled
    function cancel(address _creator, address _planId) external {
        Subscription storage subscription = subscriptions[msg.sender][_creator];
        require(
            subscription.subscriber != address(0),
            "This subscription does not exsist"
        );
        require(subscription.planId == _planId, "Incorrect Plan Id");
        /// to delete any record , use delete
        delete subscriptions[msg.sender][_creator];
        emit subscriptionCancelled(msg.sender, block.timestamp);
    }

    ///@dev - To pay the required amount later
    ///@param subscriber -  The address of the subscriber
    ///@param _creator - The address of the creator
    ///@param _planId - Id of the plan selected
    function pay(
        address subscriber,
        address _creator,
        address _planId
    ) external {
        Subscription storage subscription = subscriptions[subscriber][_creator];
        require(
            subscription.subscriber != address(0),
            "This subscription does not exsist"
        );
        require(block.timestamp > subscription.nextPayment, "Not due yet");
        Plan memory _plan = plans[_creator][_planId];
        uint256 amount = _plan.amount;
        require(msg.value == amount, "Incorrect amount");
        // eth transferred to the contract
        balances[_creator] += amount;
        emit paymentSent(subscriber, _creator, amount, block.timestamp);
        subscription.nextPayment += _plan.frequency;
    }

    /// @dev - Function for creators to withdraw the balance
    /// @param creator - Address of the creator
    /// @param creatorId-  Id of the creator to verify if right creator is calling the function or not
    /// @return success -  Returns if the transaction was completed or not
    function withdraw(address creator, uint256 creatorId)
        external
        onlyCreator(creatorId)
        returns (bool)
    {
        uint256 amount = balances[creator];
        require(amount > 0, "Amount is 0");
        balances[creator] = 0;
        (bool success, ) = creator.call{value: amount}("");
        require(success, "Failed to send Ether");
        return success;
    }

    /// @dev - to check the subscribed plans by the user
    /// @param _planId -  fetch  the plans for the specific ID
    /// @param _owner -  just fetchint the generalized plan for all the creators
    /// @return Plan -  the specfic plan for a plan ID
    function getPlans(uint256 _planId, address _owner)
        public
        returns (Plan memory)
    {
        Plan memory _plan = plans[_owner][_planId];
        return _plan;
    }

    /// @dev - Function to check the balance for the creator
    /// @param _creator - Address of the creator for which balance is to be fetched
    /// @return _balance -Balance of the creator
    function checkBalance(address _creator) public returns (uint256 _balance) {
        uint256 balance = balances[_creator];
        return balance;
    }

    /// returns the susbcriptions taken by a user according to the creator they have subscribed
    function getSubscriptions(address user, address creator)
        public
        returns (Subscription memory)
    {
        Subscription memory subscriptionsDone = subscriptions[user][creator];
        return subscriptionsDone;
    }

    receive() external payable {}

    fallback() external payable {}
}
