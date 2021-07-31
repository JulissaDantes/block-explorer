import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';
import { useState ,Link} from 'react';
import  { Wallet, utils, providers } from 'ethers';
import {BrowserRouter, Switch, Route, useHistory} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Address from '../pages/Address';
import Transaction from '../pages/Transaction';
import Block from '../pages/Block';
const { JsonRpcProvider } = providers;


function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact  path="/" component={Dashboard} />
        <Route path="/address" component={Address} />
        <Route path="/transaction" component={Transaction} />
        <Route path="/block" component={Block} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
