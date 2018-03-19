import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default Main;
