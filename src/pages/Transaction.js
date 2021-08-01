import React, { useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import  { utils, providers } from 'ethers';
import {getProviderURL} from '../utils/utils.js';
import '../assets/css/App.css';
const { JsonRpcProvider } = providers;

export default function Transaction() {
    const { search } = window.location;
    const path = window.location.href.split("/");    
    let searchHash ="";  
    if(!search.toString().includes("?s=")){
      searchHash = path[path.length - 1];
    }else{
      searchHash = new URLSearchParams(search).get('s');
    }
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
          const provider = new JsonRpcProvider(getProviderURL());
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
             <div className="App-search-container">
                <h1 className="section-header">Transaction:</h1>
                <b>Block Hash</b>: {blockHash}<br/>
                <b>Block Number</b>: {blockNumber}<br/>
                <b>Confirmations</b>: {confirmations}<br/>
                <b>Data</b>: {data}<br/>
                <b>From</b>: {from}<br/>
                <b>Gas Limit</b>: {gasLimit}<br/>
                <b>Gas Price</b>: {gasPrice}<br/>
                <b>Hash</b>: {hash}<br/>
                <b>NetworkId</b>: {networkId}<br/>
                <b>Nonce</b>: {nonce}<br/>
                <b>R</b>: {r}<br/>
                <b>Raw</b>: {raw}<br/>
                <b>S</b>: {s}<br/>
                <b>To</b>: {to}<br/>
                <b>Transaction Index</b>: {transactionIndex}<br/>
                <b>Value</b>: {value}<br/>
            </div>
            <br/>
            <button  className="go-home-button" type="button" onClick={handleClick}>
                Go home
            </button>
        </div>
    )
}
