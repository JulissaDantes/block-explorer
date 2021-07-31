import React, { useState, useEffect  }  from 'react'
import  { Wallet, utils, providers } from 'ethers';
const { JsonRpcProvider } = providers;


export default function Latestblock() {
    
    const [number, setnumber] = useState(0);
    const [hash, sethash] = useState(0);
    const [parentHash, setparentHash] = useState(0);
    const [nonce, setnonce] = useState(0);
    const [transactionsRoot, settransactionsRoot] = useState(0);
    const [stateRoot, setstateRoot] = useState(0);
    const [receiptsRoot, sereceiptsRoot] = useState(0);
    const [miner, setminer] = useState(0);
    const [difficulty, setdifficulty] = useState(0);
    const [totalDifficulty, settotalDifficulty] = useState(0);
    const [gasLimit, setgasLimit] = useState(0);
    const [gasUsed, setgasUsed] = useState(0);
    const [timestamp, settimestamp] = useState(0);
    const [transactions, settransactions] = useState(0);

    useEffect(() => {
        (async () => {
          const provider = new JsonRpcProvider("https://rinkeby.infura.io/v3/433a74c66045425ba8fdf7f1cb23ffdb");
          const latestBlockNum = await provider.getBlockNumber();
          console.log('latest block number', latestBlockNum);
          const block = await provider.getBlock(latestBlockNum,false);
          setnumber(block.number);          
          sethash(block.hash);
          setparentHash(block.parentHash);          
          setnonce(block.nonce);
          settransactionsRoot(block.transactionsRoot);          
          setstateRoot(block.stateRoot);
          sereceiptsRoot(block.receiptsRoot);         
          setminer(block.miner);
          setdifficulty(block.difficulty);          
          settotalDifficulty(block.totalDifficulty);
          setgasLimit(utils.formatEther(block.gasLimit._hex));          
          setgasUsed(utils.formatEther(block.gasUsed._hex));
          settimestamp(block.timestamp);          
          settransactions(block.transactions);
        })()
      }, [])

    return (
        <div>
             <p>Latest block:{number}</p>  
             Hash: {hash}<br/>
             ParentHash: {parentHash}<br/>
             Nonce: {nonce}<br/>
             TransactionsRoot: {transactionsRoot}<br/>
             StateRoot: {stateRoot}<br/>
             ReceiptsRoot: {receiptsRoot}<br/>
             Miner: {miner}<br/>
             Difficulty: {difficulty}<br/>
             TotalDifficulty: {totalDifficulty}<br/>
             GasLimit: {gasLimit}<br/>
             GasUsed: {gasUsed}<br/>
             Timestamp: {timestamp}<br/>
             Transactions hashes: {transactions.map((tx) => <div>{tx}</div>)}
        </div>
    )
}

