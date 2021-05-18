import React, { Component } from 'react';
import './App.css';

// class App extends React.Component { //when {Component} is not imported exclusively
class App extends Component {
  foo2 = () => 'Bar2'; //part of class -> this.foo2() must be used
  render() {
    // render() -> a lifecycle method
    const name = 'John Doe';
    const foo1 = () => 'Bar1';

    const loading = false;
    const showName = true;
    // if (loading) {
    //   return <h4>Loading...</h4>;
    // }

    return (
      // always return ONLY 1 Parent element, like <div> here, everything is in that

      // Use 'React.Fragment' instead of 'div' if you  don't wantto return a div
      //  Or just use <> and </> -> this can have problems sometimes

      // VANILLA JS----------------------------------------------------------------
      // *******************************************************
      // return React.createElement( //to render element -> createElement
      //   'div',
      //   { className: 'App' },
      //   React.createElement('h1', null, 'Hello from React')
      // );
      // *******************************************************

      // className is used instead of class
      <div className="App">
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <h1>
            Hello {name} {1 + 2} {name.toUpperCase()} {foo1()} {this.foo2()}
          </h1>
        )}
        {/* <h2>Goodbye {showName ? name : null}</h2> //Ternary */}
        <h2>Goodbye {showName && name}</h2> //removed null and name
      </div>
    );
  }
}

export default App;
