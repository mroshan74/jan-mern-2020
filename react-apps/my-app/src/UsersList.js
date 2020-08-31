import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UsersList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // https://jsonplaceholder.typicode.com/users
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const users = response.data; // data is property where the received data stored and can be accessed
        this.setState({ users });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h2>Listing users - {this.state.users.length}</h2>
        <ul>
          {this.state.users.map(user => {
            return <li key={user.id}>
              <Link to = {`/users/${user.id}`} > {user.name} </Link> {/* link building -> the brackets are because we r passing a variable to string in JSX */}
              </li>
          })} 
        </ul>
      </div>
    )
  }
}

export default UsersList 