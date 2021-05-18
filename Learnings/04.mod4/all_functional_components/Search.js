import React, { useState } from 'react';
import PropTypes from 'prop-types';

// export class Search extends Component {
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  // state = {
  //   text: '',
  // };
  const [text, setText] = useState('');

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   if (this.state.text === '') {
  //     this.props.setAlert('Please enter something', 'light');
  //   } else {
  //     this.props.searchUsers(this.state.text);
  //     this.setState({ text: '' });
  //   }
  // };
  // ==== now in functional component
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value });
    setText(e.target.value);
  };

  // render() {
  // const { showClear, clearUsers } = this.props; //destructuered at top of component
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          // value={this.state.text}
          value={text}
          // onChange={this.onChange}
          onChange={onChange}
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
  // }
};

// propTypes are now at the bottom in funcitonal components
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
