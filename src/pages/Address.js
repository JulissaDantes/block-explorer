import React, { useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import  { utils, providers } from 'ethers';
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
          const provider = new JsonRpcProvider("https://rinkeby.infura.io/v3/433a74c66045425ba8fdf7f1cb23ffdb");
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
            <div>
                <h1>Account:</h1>
              <p>Balance: {balance}</p>
              <p>Type: {type}</p>
              <p>Transactions Count:{txcount}</p>
              {code !== "0x"?(<p>Code: {code}</p>):(<p></p>)}              
            </div>
            <br/>
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        </div>
    )
}

export default Address;