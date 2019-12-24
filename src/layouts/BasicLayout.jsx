import React, { Component } from 'react';

class BasicLayout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default BasicLayout;