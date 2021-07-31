import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Searchbar from "../components/Searchbar";
import Latestblock from "../components/Latestblock";
import Latesttxs from "../components/Latesttxs";
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';
// import CardsHeader from '../components/CardsHeader';
// import Cards from '../components/Cards';
// import Graphics from '../components/Graphics';
// import TableMaterial from '../components/TableMaterial';

const useStyles= makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    iconos:{
        color: 'white'
    },
    container:{
        paddingTop: '40px',
        alignItems: 'center'
    },
    containerGrafica:{
        marginTop: '40px'
    },
    containerTabla:{
        marginTop: '40px'
    }
    }));
    
 function Dashboard() {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Searchbar/>
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