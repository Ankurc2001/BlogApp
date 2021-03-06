import React from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import { connect } from 'react-redux';

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            name:'',
            email:'',
            password:''
          };
    }
    handleNameChange(e){
        this.setState({name:e.target.value})
    }
    handleEmailChange(e){
        this.setState({email:e.target.value})
    }   
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }

    signUp(){
      axios.post('http://localhost:3000/signup', {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
    render() {
        return (
          <div>
            <form className="form-signin">
              <label for="inputName" className="sr-only">Name</label>
              <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autofocus />
              <label for="inputEmail" className="sr-only">Email address</label>
              <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
              <label for="inputPassword" className="sr-only">Password</label>
              <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
               
              <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>
            </form>
          </div>
           
        )
      }
}

export default withRouter(Signup);
