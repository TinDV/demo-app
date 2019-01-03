import React, { Component } from 'react';
import Tweet from './Tweet';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.match.params.userName,
    }
  }
  render() {
    return (
      <div className="HomePage">
        <h3>Hello { this.state.userName }</h3>
        <Tweet />
      </div>
    );
  }
}

export default HomePage;