import React, {Component} from 'react';
import {Link} from 'react-router';

class NavBar extends Component {

    render(){
        return (
          <nav className="navbar navbar-default">
              <ul className="nav navbar-nav">
                  <li className="active">
                      <Link to="testing">Home</Link>
                  </li>
                  <li>
                      <Link className="active" to="Home">Test</Link>
                  </li>
                  <li>
                      <Link className="active" to="Home">Testing</Link>
                  </li>
                  <li>
                      <Link className="active" to="Home">Whatevs</Link>
                  </li>
              </ul>
              <ul className="nav navbar-nav pull-right">
                  <li className="active">
                      <Link to="testing">Login</Link>
                  </li>
              </ul>
          </nav>
        );
    }

}

export default NavBar;