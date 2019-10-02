import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

// components 
import User from "./components/User"
import UserList from "./components/UserList"
import FollowerCard from "./components/FollowerCard"







class App extends React.Component {
  constructor() {
    super();
    this.state = {
      me: [],
      followers: []
    }
  }

  componentDidMount = () => {
    axios.get('https://api.github.com/users/frescocodes')
    .then(response => {
        console.log("RES: ", response)
        this.setState({ me: response.data})
    })
    .catch(error => {
        console.log("u suck: ", error)
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.me !== prevState.me) {
      axios
      .get('https://api.github.com/users/frescocodes/followers')
      .then(response => {
        this.setState({ followers: response.data })
        console.log("FOLLOWERS: ", this.state.followers)
      })
      .catch(error => 
        console.log("u suck: ", error))
    }
  }


  render(){
    return (
      <div className="App">
        <header><User name={this.state.me.name} username={this.state.me.login} blog={this.state.me.blog} bio={this.state.me.bio} avatar_url={this.state.me.avatar_url}/></header>
        <section id="followers-section">
          <div className="section-break"></div>
          <h2>Followers</h2>
          <div className="followers">
            {this.state.followers.map( user => (
              <>
                {console.log("USER",user)}
                <FollowerCard name={user.name} username={user.login} github={user.html_url} bio={user.bio} avatar_url={user.avatar_url}/>
              </>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
