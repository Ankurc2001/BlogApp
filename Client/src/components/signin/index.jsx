import React from "react";
import {hashHistory} from "react-router";
import {withRouter, Link,Redirect,useHistory}  from "react-router-dom";
import axios from "axios";


// const Router = window.ReactRouter.Router;
// const Route = window.ReactRouter.Route;
// const hashHistory = window.ReactRouter.hashHistory;
// const Link = window.ReactRouter.Link;



class Signin extends React.Component {
    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }

    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.state = {
          email:'',
          password:''
        };
    }

    signIn(){
      axios.post('http://localhost:3000/', {
        email: this.state.email,
        password: this.state.password
      })
      .then(function (response) {
        if(response.data == 'Success'){
          window.location.assign('http://localhost:8080/home')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
    render() {
        return (
          <div>
            <form className="form-signin">
              <h2 className="form-signin-heading">Please sign in</h2>
              <label for="inputEmail" className="sr-only">Email address</label>
              <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
              <label for="inputPassword" className="sr-only">Password</label>
              <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
               
              <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Sign in</button>
            </form>
            <div>
              <Link to="/signup">{'Signup'}</Link>
            </div>
          </div>
       
        )
      }
}

export default withRouter(Signin)

// ReactDOM.render(
//     <Router history={hashHistory}>
//         <Route component={Signin} path="/"></Route>
//         <Route component={Signup} path="/signup"></Route>
//     </Router>,
// document.getElementById('app'));