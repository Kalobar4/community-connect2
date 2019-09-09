<<<<<<< HEAD
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-small.png';
=======
import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo-small.png";
>>>>>>> 0ccf516a772c64400cb65100d6838ce205a2dfe9

import AuthContext from "../../contexts/AuthContext";
import AuthDropdown from "../../components/AuthDropdown/AuthDropdown";

import "./Navigation.css";

class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: true
  };

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && "show"}`;
    const togglerClass = `navbar-toggler ${collapsed && "collapsed"}`;

    return (
<<<<<<< HEAD
      <div className='Navigation'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
          <span className='navbarBrand'>
            <img to="./Landing" src={logo}></img>
          </span>{' '}
          <Link className='navbar-brand' to='./Landing'></Link>
=======
      <div className="Navigation">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
          <span className="navbarBrand">
            <img src={logo}></img>
          </span>{" "}
          <Link className="navbar-brand" to="#"></Link>
>>>>>>> 0ccf516a772c64400cb65100d6838ce205a2dfe9
          <button
            className={togglerClass}
            onClick={this.toggleCollapse}
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
<<<<<<< HEAD
          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li  className='nav-item'>
                <Link id='events' className='nav-link' to='/Events' onClick={this.toggleCollapse}>
                  Events
                </Link>
                <Link id="posts" className='nav-link' to='/Posts' onClick={this.toggleCollapse}>
                  Posts
=======
          <div className={targetClass} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li id="home" className="nav-item">
                <Link className="nav-link" to="/" onClick={this.toggleCollapse}>
                  Home
>>>>>>> 0ccf516a772c64400cb65100d6838ce205a2dfe9
                </Link>
              </li>
              {user && (
                <li className="nav-item">
                  <Link
<<<<<<< HEAD
                    className='nav-link'
                    to='/Posts'
=======
                    className="nav-link"
                    to="/secret"
>>>>>>> 0ccf516a772c64400cb65100d6838ce205a2dfe9
                    onClick={this.toggleCollapse}
                  >
                    Posts
                  </Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav">
              {user ? (
                <AuthDropdown onClick={this.toggleCollapse} />
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login"
                    onClick={this.toggleCollapse}
                  >
                    Login/Register
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
