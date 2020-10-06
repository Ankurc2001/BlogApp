import React from 'react';
import { createBrowserHistory } from "history";
import ReactDOM from 'react-dom';
import { Route, Switch, Router,BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { App, Signup, Signin } from './components';


import '../resources/scss/style.scss';


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
      <Switch>
        <Route path="/" component={Signin} exact={true} />
        <Route path="/signup" component={Signup} />
        <Route path ="/home" component={App}/>
      </Switch>
    </Provider>  
  </BrowserRouter>,document.getElementById('app'));