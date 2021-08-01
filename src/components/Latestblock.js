import React, { useState, useEffect  }  from 'react'
import  { utils, providers } from 'ethers';
import '../assets/css/App.css';
import {getProviderURL} from '../utils/utils.js';
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
    const [transactions, settransactions] = useState([]);
    
    useEffect(() => {
        (async () => {
          const provider = new JsonRpcProvider(getProviderURL());
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
        <div className="App-container">
             <p className="section-header">Latest block: {number}</p>  
             <b>Hash</b>: {hash}<br/>
             <b>Parent Hash</b>: {parentHash}<br/>
             <b>Nonce</b>: {nonce}<br/>
             <b>Transactions Root</b>: {transactionsRoot}<br/>
             <b>State Root</b>: {stateRoot}<br/>
             <b>Receipts Root</b>: {receiptsRoot}<br/>
             <b>Miner</b>: {miner}<br/>
             <b>Difficulty</b>: {difficulty}<br/>
             <b>Total Difficulty</b>: {totalDifficulty}<br/>
             <b>Gas Limi</b>t: {gasLimit}<br/>
             <b>Gas Used</b>: {gasUsed}<br/>
             <b>Timestamp</b>: {timestamp}<br/>
             <b>Transactions hashes</b>: {transactions.map((tx) => <div>{tx}</div>)}
        </div>
    )
}

