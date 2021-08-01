import React, { useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import  { utils, providers } from 'ethers';
const { JsonRpcProvider } = providers;

export default function Block() {
    const { search } = window.location;
    const path = window.location.href.split("/");
    let searchNumber ="";  
    if(!search.toString().includes("?s=")){
      searchNumber = path[path.length - 1];
    }else{
      searchNumber = new URLSearchParams(search).get('s');
    }

    const [number, setnumber] = useState(Number(searchNumber));
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
    let history = useHistory();

    function handleClick() {
      history.push("/");
    }

    useEffect(() => {
        (async () => {
          const provider = new JsonRpcProvider("https://rinkeby.infura.io/v3/433a74c66045425ba8fdf7f1cb23ffdb");
          const block = await provider.getBlock(number,false);

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
            <h1>
                Block:
            </h1>
            <p>
             Block Hash: {hash}<br/>
             Parent Hash: {parentHash}<br/>
             Nonce: {nonce}<br/>
             Transactions Root: {transactionsRoot}<br/>
             State Root: {stateRoot}<br/>
             Receipts Root: {receiptsRoot}<br/>
             Miner: {miner}<br/>
             Difficulty: {difficulty}<br/>
             Total Difficulty: {totalDifficulty}<br/>
             Gas Limit: {gasLimit}<br/>
             Gas Used: {gasUsed}<br/>
             Timestamp: {timestamp}<br/>
             Transactions hashes: {transactions.map((tx) => <div>{tx}</div>)}
            </p>
            <br/>
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        </div>
    )
}
