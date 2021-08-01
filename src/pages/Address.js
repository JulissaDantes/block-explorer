import React, { useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import  { utils, providers } from 'ethers';
import '../assets/css/App.css';
import {getProviderURL} from '../utils/utils.js';
const { JsonRpcProvider } = providers;

function Address() {
    const { search } = window.location;
    const path = window.location.href.split("/");
    const [balance, setbalance] = useState(0);
    const [type, settype] = useState('')
    const [code, setcode] = useState('')
    const [txcount, settxcount] = useState(0);

    let searchAccount ="";  
    if(!search.toString().includes("?s=")){
      searchAccount = path[path.length - 1];
    }else{
      searchAccount = new URLSearchParams(search).get('s');
      console.log('type',typeof(searchAccount));
    }    

    console.log('searchAccount', searchAccount,'type',typeof(searchAccount));
    let history = useHistory();

    function handleClick() {
      history.push("/");
    }

    useEffect(() => {
        (async () => {
          const provider = new JsonRpcProvider(getProviderURL());
          const blockChainAccount = await provider.getBalance(searchAccount)
          const addressCode = await provider.getCode(searchAccount);
          const txCount = await provider.getTransactionCount(searchAccount);
          settxcount(txCount);
          if(addressCode !== "0x") {
            settype('Contract')
            setcode(addressCode)
          }else{
            settype('EOA')
          }
          setbalance(utils.formatEther(blockChainAccount._hex));          
        })()
      }, [])

    return (
        <div>
            <div className="App-search-container">
                <h1 className="section-header">Account:</h1>
              <p><b>Balance</b>: {balance}</p>
              <p><b>Type</b>: {type}</p>
              <p><b>Transactions Count</b>: {txcount}</p>
              {code !== "0x"?(<p><b>Code</b>: {code}</p>):(<p></p>)}              
            </div>
            <br/>
            <button type="button" onClick={handleClick} className="go-home-button">
                Go home
            </button>
        </div>
    )
}

export default Address;