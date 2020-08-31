import React from 'react'
import Home from './Home'
import About from './About'
import Contact from "./Contact"
import {BrowserRouter, Route, Link} from 'react-router-dom'
import TaskList from "./TaskList"
import UsersList from "./UsersList"
import UserShow from './UserShow'


// import Greet from "./Greeting"


function App(props) {
    return (
      <BrowserRouter>
        <div className='container'>
          <h1>Hello React App!!!</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/users">Users</Link>

          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/tasks" component={TaskList} />
          <Route path="/users" component={UsersList} exact={true} />
          <Route path='/users/:uid' component={UserShow} />

          {/*
                <Greet />
                */}
        </div>
      </BrowserRouter>
    );
}

export default App