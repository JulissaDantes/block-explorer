import React, { useState, useEffect  }  from 'react'
import  { utils, providers } from 'ethers';
import '../assets/css/App.css';
import {getProviderURL} from '../utils/utils.js';
import {  Link } from "react-router-dom";
const { JsonRpcProvider } = providers;

export default function Latesttxs() {
    const [transactions, settransactions] = useState([]);

    useEffect(() => {
        (async () => {
          const provider = new JsonRpcProvider(getProviderURL());
          const latestBlockNum = await provider.getBlockNumber();
          let blockTxs = (await provider.getBlock(latestBlockNum,false)).transactions;
          //in case the latest block didnt mined transactions
          while(blockTxs.length < 1){
            console.log('latest block didnt have txs');
            const searchBlock = latestBlockNum-1
            blockTxs = (await provider.getBlock(searchBlock,false)).transactions;
          }
          blockTxs = blockTxs.slice(0,10);
          const txs = []
          for(let txHash of blockTxs){
            let currentTx = await provider.getTransaction(txHash);            
            txs.push({hash:txHash, from:currentTx.from, to:currentTx.to, value:utils.formatEther(currentTx.value._hex)});
          }
          settransactions(txs);          
        })()
      }, [])


    return (
        <div className="App-container">
           <p className="section-header">Latest transactions </p> 
            {transactions.map((transaction) => (
            <div key={transaction.hash} className="tx-display">
              <p><b>Transaction Hash</b>:<Link className="text-link" to={`/transaction/${transaction.hash}`}>{transaction.hash}</Link></p>
                <p><b>From</b>: <Link className="text-link" to={`/address/${transaction.from}`}>{transaction.from}</Link></p>
                <p><b>To</b>: <Link className="text-link" to={`/address/${transaction.to}`}>{transaction.to}</Link></p>
                <p><b>Value</b>: {transaction.value}</p>
            </div>
            ))}
        </div>
    )
}
