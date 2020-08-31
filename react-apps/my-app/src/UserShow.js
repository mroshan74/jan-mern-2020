import React from 'react'
import axios from 'axios'


class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:[]
        }
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.uid}`)
            .then((response) =>{
                const user = response.data
                this.setState({user})
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    render(){
        return (
          <div>
            <h4>User Show - {this.props.match.params.uid}</h4>
            <p>
              {this.state.user.name} - {this.state.user.email} - {this.state.user.phone}
            </p>
          </div>
        );
    }
}

export default UserShow