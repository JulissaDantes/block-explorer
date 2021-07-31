import React from 'react'
import { useHistory } from "react-router-dom";

function SearchBar(){        
    let history = useHistory();

    function handleClick() {
        //todo search from the dropdown to see what is being looked for
        history.push({pathname:"/address",search:""});
    }
    return(
        <form action="/address" method="get">//todo use handleclick
        <label htmlFor="header-search">
            <span className="visually-hidden">Search what you want</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search by transaction hash/Block Number/Account"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    )

}

export default SearchBar;
