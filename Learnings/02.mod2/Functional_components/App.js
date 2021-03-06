import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

// class App extends React.Component { //when {Component} is not imported exclusively
class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // === .then -> promise
  // componentDidMount() {
  //   axios
  //     .get('https://api.github.com/users')
  //     .then((res) => console.log(res.data));
  // }
  // === ASYNC js
  // async componentDidMount() {
  //   const res = await axios.get('https://api.github.com/users');
  //   console.log(res.data);
  // }
  async componentDidMount() {
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    //this.state.loading = true; -> this not how changes can be made to state
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
    console.log(res.data);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
