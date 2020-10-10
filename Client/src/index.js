import React from 'react';
import { createBrowserHistory } from "history";
import ReactDOM from 'react-dom';
import { Route, Switch, Router,BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header/index.jsx';
import Footer from './components/footer/index';
import store from './store';
import { App, Signup, Signin,AddBlog} from './components';


import '../resources/scss/style.scss';


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
      <Header/>
      <Switch>
        <Route path="/" component={Signin} exact={true} />
        <Route path="/signup" component={Signup} />
        <Route path ="/AddBlog" component={AddBlog}/>
        <Route  path="/home" component={App}/>
      </Switch>
      <Footer/>
    </Provider>  
  </BrowserRouter>,document.getElementById('app'));