import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top lead">
            <div className="container">
              <div className="navbar-brand pull-left">
                <ul className="navbar-nav">
                  <li className="active">
                    <Link className="navbar-brand" to="/">
                      <img src="http://localhost/public/img/sample-logo.png" width="40" alt="logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <i className="fa fa-fw fa-home"></i> Home
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/projects">
                      <i className="fa fa-fw fa-briefcase"></i> Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/page1/Jason">Page 1</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/page2">Page 2</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux Samples</a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                      <Link className="dropdown-item" to="/redux/counter"><span className="lead">Counter</span></Link>
                      <Link className="dropdown-item" to="/redux/input"><span className="lead">Input</span></Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default Header;
