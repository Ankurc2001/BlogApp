import React from  "react";
import {withRouter} from "react-router-dom"


class Header extends React.Component {
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Blog</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="home">Home <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="AddBlog">Add Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Profile</a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="signup">Singup</a>
              </li>
            </ul>
          </div>
        </nav>
        ) 
    }
}

export default Header;