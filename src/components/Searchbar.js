import React ,{ useState }from 'react'
import Select from 'react-select';

function SearchBar(){        

    function handleChange(e) {
        setcriteria(e.value);
    }

    const options = [
        { value: 'address', label: 'Address' },
        { value: 'block', label: 'Block Number' },
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
