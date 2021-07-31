import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';
import { useState } from 'react';
import  { Wallet, utils, providers } from 'ethers';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
const { JsonRpcProvider } = providers;


function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
