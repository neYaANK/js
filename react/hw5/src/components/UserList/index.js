import React, { Component } from 'react';
import UserCard from '../UserCard';

class UserList extends Component {
  constructor(props) {
    super(props);

  }
  userSelector = (id) => {
    const { users, setUserSelector } = this.props;
    const newUsers = users.map(user => (
      {
        ...user,
        isSelected: user.id === id ? !user.isSelected : user.isSelected
      }
    ))
    setUserSelector(newUsers);
  }
  render() {
    const { users } = this.props;
    return (
      <section>
        {
          users.map(user => <UserCard key={user.id} user={user} userSelector={this.userSelector} />)
        }
      </section>
    );
  }
}

export default UserList;
