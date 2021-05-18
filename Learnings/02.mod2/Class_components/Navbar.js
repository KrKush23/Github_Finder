// shortcut for boilerplate for
// class-based components wiht export at bottom
//  -> rce

import React, { Component } from 'react';
import PropTypes from 'prop-types'; //shortcut -> impt

//  PROPS
// properties that we can pass to a component from outside
export class Navbar extends Component {
  // when props are not passed, default is used
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
  };

  // Typechecking for props
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon}></i> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
