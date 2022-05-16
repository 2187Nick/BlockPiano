# 🏗 scaffold-eth - Blockchain Piano

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

🔏 Edit your smart contract `BlockPiano.sol` in `packages/hardhat/contracts/BlockAudio.sol`

Change the _owner address in the constructor argument.



In a third terminal window, deploy contracts:
```
yarn deploy
```

#Add sound to to each note:

On the contrat page the owner can set the audio for each note.

![piano_contract](https://user-images.githubusercontent.com/75052782/168694444-7de245f2-9749-4242-8f40-021ebf085974.png)

Convert an mp3 audio file into base64(Needs to be less than 3 seconds). There are free online converters.

Paste the base64 data into the desired note field. Click send and approve the transaction.

![piano_notes](https://user-images.githubusercontent.com/75052782/168694488-a30a7fe4-2f80-4bc4-bebe-617d6863e3f3.png)


🌍 You need an RPC key for production deployments/Apps, create an [Alchemy](https://www.alchemy.com/) account and replace the value of `ALCHEMY_KEY = xxx` in `packages/react-app/src/constants.js`

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

💼 Edit your deployment scripts in `packages/hardhat/deploy`

📱 Open http://localhost:3000 to see the app



## Contact

Join the telegram [support chat 💬](https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA) to ask questions and find others building with 🏗 scaffold-eth!
