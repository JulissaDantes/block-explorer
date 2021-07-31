import React, { useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import  { utils, providers } from 'ethers';
const { JsonRpcProvider } = providers;

function Address() {
    const { search } = window.location;
    const [account, setaccount] = useState({});
    const searchAccount = new URLSearchParams(search).get('s');
    let history = useHistory();

    function handleClick() {
      history.push("/");
    }

    useEffect(() => {
        (async () => {
          const provider = new JsonRpcProvider("https://rinkeby.infura.io/v3/433a74c66045425ba8fdf7f1cb23ffdb");
          const blockChainAccount = await provider.lookupAddress(searchAccount);
          console.log('account searched:',blockChainAccount);
          setaccount(blockChainAccount);          
        })()
      }, [])

    return (
        <div>
            <div>
                <h1>Account:</h1>

            </div>
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        </div>
    )
}

export default Address;