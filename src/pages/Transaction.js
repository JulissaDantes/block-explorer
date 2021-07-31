import React, { useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import  { utils, providers } from 'ethers';
const { JsonRpcProvider } = providers;

export default function Transaction() {
    const { search } = window.location;
    const searchHash = new URLSearchParams(search).get('s');
    const [blockHash,setblockHash] = useState(0)
    const [blockNumber,setblockNumber]= useState(0)
    const [confirmations,setconfirmations]= useState(0)
    const [data,setdata]= useState(0)
    const [from,setfrom]= useState(0)
    const [gasLimit,setgasLimit]= useState(0)
    const [gasPrice,setgasPrice]= useState(0)
    const [hash,sethash]= useState(0)
    const [networkId,setnetworkId]= useState(0)
    const [nonce,setnonce]= useState(0)
    const [r,setr]= useState(0)
    const [raw,setraw]= useState(0)
    const [s,sets]= useState(0)
    const [to,setto]= useState(0)
    const [transactionIndex,settransactionIndex]= useState(0)
    const [value,setvalue]= useState(0)
    let history = useHistory();

    function handleClick() {
      history.push("/");
    }

    useEffect(() => {
        (async () => {
          const provider = new JsonRpcProvider("https://rinkeby.infura.io/v3/433a74c66045425ba8fdf7f1cb23ffdb");
          const blockChainInfo = await provider.getTransaction(searchHash);
          console.log('transaction searched:',blockChainInfo);
          setblockHash(blockChainInfo.blockHash)
          setblockNumber(blockChainInfo.blockNumber)
          setconfirmations(blockChainInfo.confirmations)
          setdata(blockChainInfo.data)
          setfrom(blockChainInfo.from)
          setgasLimit(utils.formatEther(blockChainInfo.gasLimit._hex))
          setgasPrice(utils.formatEther(blockChainInfo.gasPrice._hex))
          sethash(blockChainInfo.hash)
          setnetworkId(blockChainInfo.networkId)
          setnonce(blockChainInfo.nonce)
          setr(blockChainInfo.r)
          setraw(blockChainInfo.raw)
          sets(blockChainInfo.s)
          setto(blockChainInfo.to)
          settransactionIndex(blockChainInfo.transactionIndex)
          setvalue(utils.formatEther(blockChainInfo.value._hex))        
        })()
      }, [])

    return (
        <div>
             <div>
                <h1>Transaction:</h1>
                blockHash: {blockHash}<br/>
                blockNumber: {blockNumber}<br/>
                confirmations: {confirmations}<br/>
                data: {data}<br/>
                from: {from}<br/>
                gasLimit: {gasLimit}<br/>
                gasPrice: {gasPrice}<br/>
                hash: {hash}<br/>
                networkId: {networkId}<br/>
                nonce: {nonce}<br/>
                r: {r}<br/>
                raw: {raw}<br/>
                s: {s}<br/>
                to: {to}<br/>
                transactionIndex: {transactionIndex}<br/>
                value: {value}<br/>
            </div>
            <br/>
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        </div>
    )
}
