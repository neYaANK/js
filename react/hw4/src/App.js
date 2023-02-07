import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './components/User';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: '',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg',
          married: false,
          socials: {
            instagram: 'https://www.instagram.com/schwarzenegger/',
            facebook: 'https://www.facebook.com/arnold',
            twitter: 'https://twitter.com/Schwarzenegger'
          }

        },
        {
          name: 'Илон Маск',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/274px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
          married: false,
          socials: {
            instagram: 'https://www.instagram.com/elonmusk/',
            twitter: 'https://twitter.com/elonmusk',
          }
        },
        {
          name: 'Сильвестр Сталлоне',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Sylvester_Stallone_2015.JPG/250px-Sylvester_Stallone_2015.JPG',
          married: true,
          socials: {
            instagram: 'https://www.instagram.com/officialslystallone/',
            facebook: 'https://www.facebook.com/SylvesterStallone/',
          }
        }
      ]
    }
  }

  render() {
    const { users } = this.state;
    return (
      <section>
        {
          users.map((user, i) => <User key={i} name={user.name} avatar={user.avatar} married={user.married} socials={user.socials} />)
        }
      </section>
    )
  }
  // render() {
  //   return (
  //     <section>
  //       <User
  //         name=""
  //         avatar="https://upload.wikimedia.org/wikipedia/commons/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg"
  //         married={false}
  //       />
  //       <User
  //         name="Илон Маск"
  //         avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/274px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
  //         married={false}
  //      />
  //       <User
  //         name="Сильвестр Сталлоне"
  //         avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Sylvester_Stallone_2015.JPG/250px-Sylvester_Stallone_2015.JPG"
  //         married={true}
  //      />
  //     </section>
  //   )
  // }

}

export default App;
