import React, { Component } from 'react';

class SelectedUsers extends Component {

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

  selectedUsersRender = ({ name, id }) => <span key={id} onClick={() => this.userSelector(id)}>{name} </span>


  render() {
    const { users } = this.props;
    return (
      <section>
        {
          users
            .filter(user => user.isSelected)
            .map(this.selectedUsersRender)
        }
      </section>
    );
  }
}

export default SelectedUsers;
