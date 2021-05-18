import React, { Component } from 'react';

class UserItem extends Component {
  // === one way to define state of component ===
  //   constructor() {
  //     super(); //to call parent cnstructor
  //     this.state = {
  //       id: 'id',
  //       login: 'mojombo',
  //       avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
  //       html_url: 'https://github.com/mojombo',
  //     };
  //   }
  // ==== 2nd way to define state of component ===
  //   state = {
  //     id: 'id',
  //     login: 'mojombo',
  //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
  //     html_url: 'https://github.com/mojombo',
  //   };
  render() {
    // Destructuring
    // const { login, avatar_url, html_url } = this.state;

    // now prop of user is passed -> destructure from it
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center">
        {/* src = {this.state.avatar_url} //without destrucuring */}
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
  }
}

export default UserItem;
