import React, { useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import  { utils, providers } from 'ethers';
const { JsonRpcProvider } = providers;

function Address() {
    const { search } = window.location;
    const [balance, setbalance] = useState(0);
    const searchAccount = new URLSearchParams(search).get('s');
    let history = useHistory();

    function handleClick() {
      history.push("/");
    }

    useEffect(() => {
        (async () => {
          const provider = new JsonRpcProvider("https://rinkeby.infura.io/v3/433a74c66045425ba8fdf7f1cb23ffdb");
          const blockChainAccount = await provider.getBalance(searchAccount)
          console.log('account searched:',blockChainAccount);
          setbalance(utils.formatEther(blockChainAccount._hex));          
        })()
      }, [])

    return (
        <div>
            <div>
                <h1>Account:</h1>
              <p>Balance: {balance}</p>
            </div>
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        </div>
    )
}

export default Address;