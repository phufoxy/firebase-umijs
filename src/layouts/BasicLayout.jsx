import React, { Component } from 'react';
import { Firebase, FirebaseContext } from '../firebase';

class BasicLayout extends Component {
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        {this.props.children}
      </FirebaseContext.Provider>
    );
  }
}

export default BasicLayout;
