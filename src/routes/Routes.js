import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';
import { useState } from 'react';
import  { Wallet, utils, providers } from 'ethers';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
const { JsonRpcProvider } = providers;


function Routes() {
  /*getBlockChainData()

  async function getBlockChainData(){
    const provider = new JsonRpcProvider("https://rinkeby.infura.io/v3/433a74c66045425ba8fdf7f1cb23ffdb");

    // create a new wallet with a simple private key
    const privateKey = "0x91e666c2ee8463dbf3004730d389a8130c2ceba6e543ded0c80ea385ca72168f";
    const wallet = new Wallet(privateKey, provider);
    
    wallet.getBalance().then((x) => console.log(utils.formatEther(x)));
  }*/
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
