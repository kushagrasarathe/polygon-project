// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// - A Subscription service is started
// -  Payment can be deducted after a period of 30 days , and anyone can trigger it
// - Payment is done from a particular ERC20 token , and approval needs to be given by payee

///  instance of an ERC20 token , which allows the function like transfer and approve
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/IERC20.sol" ;

interface NFT {
    function mint(address user, uint256 tokenId) external;

    function balanceOf(address user, uint256 tokenId)
        external
        returns (uint256);
}

interface Creator {
    function addBalance(uint256 _id, uint256 _amount)
        external
        returns (uint256 _balance);

    function fetchAddress(uint256 _id) external view returns (address);

    function fetchBalance(uint256 _id) external view returns (uint256);

    function detuctBalance(uint256 _id, uint256 _amount)
        external
        returns (uint256 _balance);
}

contract SubscriptionPlan {
    address public owner;

    NFT nft;

    // creator contract to be used for details and all
    Creator creator;

    uint256 totalCreators = 0;

    /// struct for the details of the Plan created and by which Creator it is applicable
    struct Plan {
        uint256 amount;
        uint256 frequency;
    }

    struct Subscription {
        uint256 planId;
        uint256 start;
        uint256 nextPayment;
    }
    /// intialize a subscriptions for a creator
    /// mapping from user address-->creator Id--> Subscription taken
    mapping(address => mapping(uint256 => Subscription)) public subscriptions;

    // mapping from creator Id to array
    mapping(uint256 => address[]) public subscribers ;

    // mapping(address => Plan) public planWithId;

    /// mapping from creator --> planID --> Plan
    /// freedom for the creator to add their own plans
    mapping(address => mapping(uint256 => Plan)) public plans;
    uint256 planId = 0;

    //mapping from the creator id to the creator address
    // marked private for now , so can be accesses only inside the contract
    // mapping(uint256 => address) private creators;

    // mapping from creator address --> balance
    // mapping(address => uint256) balances;

    // 0 --> Silver NFT
    // 1 --> Gold NFT
    // 2 --> Platinum NFT

    /// events for subscription creation , cancellation and payment
    event subscriptionCreated(address subscriber, uint256 date);

    event subscriptionCancelled(address subscriber, uint256 date);

    event paymentSent(address from, address to, uint256 amount, uint256 date);

    /// costructor to take all the details needed for a subscription plan
    constructor(address nftContract, address creatorContract) payable {
        nft = NFT(nftContract);
        creator = Creator(creatorContract);
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not owner");
        _;
    }

    modifier onlyCreator() {
        require(nft.balanceOf(msg.sender, 3) != 0, "You are not a creator");
        _;
    }

    // /// @dev - to addCreator to the platform
    // /// @param _creator - address of the creator to be added
    // /// only owner can call this function
    // function addCreator(address _creator)
    //     public
    //     onlyOwner
    //     returns (uint256 _id)
    // {
    //     require(_creator != address(0), "Please enter a valid address");
    //     /// check if he is already there or not
    //     // creators.push(_creator)
    //     creators[totalCreators] = _creator;
    //     uint256 id = totalCreators;
    //     totalCreators += 1;
    //     /// length of the array or the id of creator
    //     return id;
    // }

    /// @dev - to create plans
    /// @param id - id of the Plan created by the Owner , and only they can add a new plan
    /// @param planAmount - amount to be set for the Plan
    /// @param frequency - frequency of the plan in days
    /// @param _creator -  address of the creator for which the plan is added
    function createPlan(
        uint256 id,
        uint256 planAmount,
        uint256 frequency,
        address _creator
    ) public onlyOwner {
        require(planAmount > 0, "The amount for the plan should be > 0 ");
        require(frequency > 0, "Time peroid should be > 0");
        plans[_creator][id] = Plan(planAmount, frequency);
    }

    /// @dev to subscribe for the plan
    /// @param _creatorID -  address of the creator to be subscribed for
    /// @param _planId - Plan to be subscribed
    function subscribe(uint256 _creatorID, uint256 _planId) external payable {
        /// for now the plans are fetched for the owner of contract , set intially
        Plan memory _plan = plans[owner][_planId];
        uint256 amount = _plan.amount;
        uint256 _frequency = _plan.frequency;
        require(msg.value == amount, "Incorrect Amount");
        // contract recieved the amount
        creator.addBalance(_creatorID, amount);
        address _creator = creator.fetchAddress(_creatorID);
        emit paymentSent(msg.sender, _creator, amount, block.timestamp);
        subscriptions[msg.sender][_creatorID] = Subscription(
            _planId,
            block.timestamp,
            block.timestamp + _frequency
        );
        subscribers.push(msg.sender);
        /// will mint the NFT right after the adding to subscriptions list
        nft.mint(msg.sender, _planId);
        emit subscriptionCreated(msg.sender, block.timestamp);
    }

    /// @dev to cancel the subscription plan
    /// @param _creatorID -  address of the creator for which the plan is to be cancelled
    /// @param _planId - Id of the plan to be cancelled
    function cancel(uint256 _creatorID, uint256 _planId) external {
        address _creator = creator.fetchAddress(_creatorID);
        Subscription storage subscription = subscriptions[msg.sender][_creatorID];
        require(
            ,
            "This subscription does not exsist"
        );
        require(subscription.planId == _planId, "Incorrect Plan Id");
        /// to delete any record , use delete
        delete subscriptions[msg.sender][_creator];
        emit subscriptionCancelled(msg.sender, block.timestamp);
    }

    ///@dev - To pay the required amount later
    ///@param subscriber -  The address of the subscriber
    ///@param _creatorID - The address of the creator
    ///@param _planId - Id of the plan selected
    function pay(
        address subscriber,
        uint256 _creatorID,
        uint256 _planId
    ) external payable {
        address _creator = creator.fetchAddress(_creatorID);
        Subscription storage subscription = subscriptions[subscriber][_creatorID];
        require(
            subscription.subscriber != address(0),
            "This subscription does not exsist"
        );
        require(block.timestamp > subscription.nextPayment, "Not due yet");
        Plan memory _plan = plans[_creator][_planId];
        uint256 amount = _plan.amount;
        require(msg.value == amount, "Incorrect amount");
        // eth transferred to the contract
        creator.addBalance(_creatorID, amount);
        emit paymentSent(subscriber, _creator, amount, block.timestamp);
        subscription.nextPayment += _plan.frequency;
    }

    /// @dev - Function for creators to withdraw the balance
    /// @param _Id Id of the creator to verify if right creator is calling the function or not
    /// @return success -  Returns if the transaction was completed or not
    function withdraw(uint256 _Id) external onlyCreator returns (bool) {
        uint256 _amount = creator.fetchBalance(_Id);
        require(_amount > 0, "Amount is 0");
        ///update the balance here for the creator to 0
        creator.detuctBalance(_Id, _amount);
        (bool success, ) = creator.call{value: _amount}("");
        require(success, "Failed to send Ether");
        return success;
    }

    /// @dev - to check the subscribed plans by the user
    /// @param _planId -  fetch  the plans for the specific ID
    /// @param _owner -  just fetchint the generalized plan for all the creators
    /// @return Plan -  the specfic plan for a plan ID
    function getPlans(uint256 _planId, address _owner)
        public
        view
        returns (Plan memory)
    {
        Plan memory _plan = plans[_owner][_planId];
        return _plan;
    }

    /// @dev fetches the susbcriptions taken by a user according to the creator they have subscribed
    /// @param user - user address for whom the details are to be fetched
    /// @param creator -  the creator address for whom they have subscribed for
    /// @return Subscription -  details of the subscription
    function getSubscriptions(address user, address creator)
        public
        view
        returns (Subscription memory)
    {
        Subscription memory subscriptionsDone = subscriptions[user][creator];
        return subscriptionsDone;
    }

    /// @dev - to fetch the subscribers array for the creator 
    /// @param _id -  id of the creator for whom the address are needed
    /// @return _subscribers - The array of subscribers for the creator
    function getSubscribers(uint256 _id) public view returns(address[]) {
        return subscribers[_id];
    }
    receive() external payable {}

    fallback() external payable {}
}
