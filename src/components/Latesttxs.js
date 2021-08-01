import React, { useState, useEffect  }  from 'react'
import  { utils, providers } from 'ethers';
import '../assets/css/App.css';
import {getProviderURL} from '../utils/utils.js';
const { JsonRpcProvider } = providers;

export default function Latesttxs() {
    const [transactions, settransactions] = useState([]);

    useEffect(() => {
        (async () => {
          const provider = new JsonRpcProvider(getProviderURL());
          const latestBlockNum = await provider.getBlockNumber();
          const blockTxs = (await provider.getBlock(latestBlockNum,false)).transactions;
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
            <div key={transaction.hash}>
                <p>from: {transaction.from}</p>
                <p>to: {transaction.to}</p>
                <p>value: {transaction.value}</p>
            </div>
            ))}
        </div>
    )
}
