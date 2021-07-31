import React, { useState, useEffect  }  from 'react'
import  { utils, providers } from 'ethers';
const { JsonRpcProvider } = providers;

export default function Latesttxs() {
    const [transactions, settransactions] = useState([]);
    useEffect(() => {
        (async () => {
          const provider = new JsonRpcProvider("https://rinkeby.infura.io/v3/433a74c66045425ba8fdf7f1cb23ffdb");
          const latestBlockNum = await provider.getBlockNumber();
          const blockTxs = (await provider.getBlock(latestBlockNum,false)).transactions;
          const txs = []
          for(let txHash of blockTxs){
            let currentTx = await provider.getTransaction(txHash);            
            txs.push({hash:txHash, from:currentTx.from, to:currentTx.to, value:utils.formatEther(currentTx.value._hex)});
          }
          console.log('txs:',txs);
          settransactions(txs);          
        })()
      }, [])


    return (
        <div>
            Latest transactions 
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
