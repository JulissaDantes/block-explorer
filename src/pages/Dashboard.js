import React,{useState} from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Searchbar from "../components/Searchbar";
import Latestblock from "../components/Latestblock";
import brain from '../assets/img/brain.png'
import Latesttxs from "../components/Latesttxs";
import Select from 'react-select';
import { bake_cookie, read_cookie} from 'sfcookies';
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
    const prevSelection = (read_cookie("blockExplorerNetwork") !=="")?read_cookie("blockExplorerNetwork"):'Mainnet';
    const [network, setnetwork] = useState(prevSelection)
    function handleChange(e) {
        bake_cookie("blockExplorerNetwork", e.value);
        window.location.reload(false);
    }
    const classes= useStyles();
    return (
        <div>
            <div className={classes.root}>
                <h1 className="network-header">{network}</h1>
                <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Select placeholder={<div>Select Network</div>} options={options} onChange={handleChange} width="50px"></Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Searchbar/>
                    </Grid>
                    <Grid item xs={6}>
                        <Latestblock/>
                    </Grid>
                    <Grid item xs={6}>
                        <Latesttxs/>
                    </Grid>
                </Grid>
            </div>
            <footer className="footer--pin">
                Powered by Julissa's Brain<img src={brain} alt="Brain" height="45"/>
            </footer>
      </div>
    )
}

export default Dashboard;