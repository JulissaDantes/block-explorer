import React,{useState} from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Searchbar from "../components/Searchbar";
import Latestblock from "../components/Latestblock";
import Latesttxs from "../components/Latesttxs";
import Select from 'react-select';
import { bake_cookie} from 'sfcookies';
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';


const useStyles= makeStyles(()=>({
    root:{
        padding: "5%",
        flexGrow: 1
    }
    }));

    const options = [
        { value: 'Mainnet', label: 'Mainnet' },
        { value: 'Rinkeby', label: 'Rinkeby' },
        { value: 'Ropsten', label: 'Ropsten' },
        { value: 'Kovan', label: 'Kovan' },
        { value: 'Gorli', label: 'Gorli' }
      ]
 function Dashboard() {
    const [network, setnetwork] = useState('Mainnet')
    function handleChange(e) {
        bake_cookie("blockExplorerNetwork", e.value);
        setnetwork(e.value)
    }
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <h1>{network}</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Searchbar/>
                </Grid>
                <Grid item xs={6}>
                <Select placeholder={<div>Select Network</div>} options={options} onChange={handleChange}></Select>
                </Grid>
                <Grid item xs={12}>
                    <Latestblock/>
                </Grid>
                <Grid item xs={12}>
                    <Latesttxs/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;