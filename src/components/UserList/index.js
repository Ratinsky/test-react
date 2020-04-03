import React, { Component } from 'react';
import ItemUser from '../ItemUser';

class UserList extends Component {

  render() {
    const {
      data,
      activeUser,
    } = this.props;

    return (
      <div className='userList'>
        <div className='usersList__head'>
          <div className='avatar'>
            <p>Avatar: </p>
          </div>
          <div>
            <p>Name:</p>
          </div>
          <div>
            <p>Age:</p>
          </div>
          <div>
            <p>Phone:</p>
          </div>
        </div>
        {
          data.map(item => (
            <ItemUser
              updateActiveUser={activeUser}
              {...item}
            />
          ))
        }
        {/* {userList.map(item => this.itemUser(item))} */}
      </div>
    );
  }
};

export default UserList;