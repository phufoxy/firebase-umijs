import React, { Component } from 'react';

class SecurityLayout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default SecurityLayout;