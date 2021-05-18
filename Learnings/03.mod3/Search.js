import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  //    ====If we don't use arrow fucntions, then 'this' won't be
  //    ===recognized and we would have to bind() it
  //   onSubmit(e) {
  //       e.preventDefault(); // else it would submit to a file
  //       console.log(this.state.text);
  //   }

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.text);
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light'); //arg1-> text, type->light
    } else {
      this.props.searchUsers(this.state.text); //sending props up by calling a porps function
      this.setState({ text: '' });
    }
  };

  onChange = (e) => {
    // this.setState({ text: e.target.value });
    this.setState({ [e.target.name]: e.target.value }); //using a key
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange} //fire offs a method -> onChange
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
