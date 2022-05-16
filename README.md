# 🏗 scaffold-eth - Audio over Blockchain

> Demonstration showing how audio can be sent over the blockchain.

Play with the [live app](https://dusty-rice5.surge.sh/) deployed on kovan network.

These notes should play on most broswers and without connecting your wallet.

The notes are stored on the blockchain.  Anyone can read the notes into their app/site for free.

![piano](https://user-images.githubusercontent.com/75052782/168682799-b3f65571-8483-46eb-909c-b2b712237616.png)


### Installation

Clone the repo:
```
git clone  https://github.com/chrontast/BlockPiano.git
cd BlockPiano
```

Install dependencies:
```
yarn install
```

Start frontend
```
cd BlockPiano
yarn start
```

In a second terminal window, start a local blockchain
```
yarn chain
```

In a third terminal window, deploy contracts:
```
yarn deploy
```

🌍 You need an RPC key for production deployments/Apps, create an [Alchemy](https://www.alchemy.com/) account and replace the value of `ALCHEMY_KEY = xxx` in `packages/react-app/src/constants.js`

🔏 Edit your smart contract `BlockAudio.sol` in `packages/hardhat/contracts`

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

💼 Edit your deployment scripts in `packages/hardhat/deploy`

📱 Open http://localhost:3000 to see the app



## Contact

Join the telegram [support chat 💬](https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA) to ask questions and find others building with 🏗 scaffold-eth!
