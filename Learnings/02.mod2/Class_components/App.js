import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

// class App extends React.Component { //when {Component} is not imported exclusively
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/*nothing is passed -> uses default props */}
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
