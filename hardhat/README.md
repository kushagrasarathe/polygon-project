NFT contract deployed to: 0xfAB685ca8e509c4673d0704807bC3206c1a209d1
Subscription deployed to: 0x72ad7812D043932f0D08cb15d2fc2A2B7233dfa4
Subscription deployed to: 0x92ce05f2f354f6a047a9202F60A1F61311c04169

Creator contract deployed to: 0x86F8cc96dD0dBB478A24125168B3DC7C5368B549

New /// 31-07-2022
NFT contract deployed to: 0xFFbF06f950De26fCa1175B82C122f4B9f27346E5
Creator contract deployed to: 0xdbCEB130F4e80d828AF356ddF9F97B07BFd4B29E
Content contract deployed to: 0x99FBB7e6F8789AE2eca6a07bcfC2e94f1D2376cA
Subscription deployed to: 0x53FE62421800879B0f86bff4BC022667124d02F6

# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.js
node scripts/deploy.js
npx eslint '**/*.js'
npx eslint '**/*.js' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```
