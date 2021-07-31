import React ,{ useState }from 'react'
import { useHistory} from "react-router-dom";
import Select from 'react-select';

function SearchBar(){        
    let history = useHistory();

    function handleClick() {
        //todo search from the dropdown to see what is being looked for
        history.push({pathname:"/address",search:""});
    }

    function handleChange(e) {
        console.log("Fruit Selected!!",e.value);
        setcriteria(e.value);
    }

    const options = [
        { value: 'address', label: 'Address' },
        { value: 'block', label: 'Block' },
        { value: 'transaction', label: 'Transaction' }
      ]
    const [criteria, setcriteria] = useState("")

    return(
        <form action={"/"+criteria} method="get">
        <Select placeholder={<div>Select Search Criteria</div>} options={options} onChange={handleChange}></Select>
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
