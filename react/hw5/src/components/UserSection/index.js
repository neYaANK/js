import React from 'react';
import SelectedUsers from '../SelectedUsers';
import UserCard from '../UserCard';
import UserList from '../UserList';

const userDb = [
  {
    id: 1,
    name: 'Арнольд',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg',
    married: false,
  },
  {
    id: 2,
    name: 'Илон Маск',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/274px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
    married: false
  },
  {
    id: 3,
    name: 'Сильвестр Сталлоне',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Sylvester_Stallone_2015.JPG/250px-Sylvester_Stallone_2015.JPG',
    married: true
  }
];

class UserSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userDb.map(user => ({ ...user, isSelected: false }))
    }
  }

  setUserSelector = (newUsers) => this.setState({ users: newUsers })

  render() {
    const { users } = this.state;
    return (
      <>
        <UserList users={users} setUserSelector={this.setUserSelector} />
        <SelectedUsers users={users} setUserSelector={this.setUserSelector} />
      </>
    )
  }

}

export default UserSection;
