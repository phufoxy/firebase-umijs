import React, { Component } from 'react';
import {
  Firebase,
  FirebaseContext,
  withFirebase
} from "../firebase";

class Welcome extends Component {
  state = {
    token: ''
  }
  componentDidMount() {
    const firebase = this.props.firebase;
    // Request token browsers
    firebase.requestToken(async (token) => {
      this.setState({
        token
      })
     console.log(token);
     
    });

    // Reciver message from server
    firebase.onMessage((data) => {
      console.log(data);
      alert('thong báo')
     
    });
  }
  render() {
    return (
      <div>
        welcome
        <p>
          {this.state.token}
        </p>
      </div>
    );
  }
}

export default withFirebase(Welcome);