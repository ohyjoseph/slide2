import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import FriendList from './FriendList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: 'hello world',
      friends: ['joseph', 'matt', 'dad']
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2> {this.state.dummy}</h2>
        </header>
        <FriendList />
      </div>
    );
  }
}

export default App;
