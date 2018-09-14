import React, { Component } from 'react';

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ['joseph', 'matt', 'dad', 'calvin']
    }
  }
  render() {
    let friendList = this.state.friends.map((friend, ind) => {
      return <h3 key={ind}>{friend}</h3>
    });
    console.log(friendList)
    return (
      <div>
        {friendList}
      </div>
    );
  }
}

export default FriendList;