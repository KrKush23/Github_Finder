import React from 'react';
import PropTypes from 'prop-types';

// function UserItem () { //other way
// const UserItem = (props) => {//better destructuring below
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // render() { ->no need of render()
  // const { login, avatar_url, html_url } = this.props.user; -> no need of 'this' as props will be passed in the funcitonal component
  // const { login, avatar_url, html_url } = props.user; //destructured above only now
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
  // }
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired, //just write "ptor"
};

export default UserItem;
