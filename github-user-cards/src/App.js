import React from 'react';
import logo from './logo.svg';
import './App.css';

// components 
import User from "./components/User"
import UserList from "./components/UserList"


class App extends React.Component {


  render(){
    return (
      <div className="App">
        <h1>hello</h1>
        <User />
      </div>
    );
  }
}

export default App;
