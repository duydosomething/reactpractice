import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import CustomerForm from "./components/customerForm";
import * as actions from "./actions";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>

        <Customers />
        <CustomerForm/>

      </div>
    );
  }
}

export default connect(null, actions)(App);
