import React, { Component } from 'react';
import Data from '../json/Status';
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
        <ul id="listItem">
        {
          Data.map(function(item, i){
            return <li key={i}>{item.status.content}</li>
          })
        }
        </ul>
      </div>
    );
  }

}

export default HomePage;