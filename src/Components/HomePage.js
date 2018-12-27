import React, { Component } from 'react';
import Data from '../Json/Status';
class HomePage extends Component {
  render() {
    // console.log(Data);
    return (
      <div className="HomePage">
        <h4>Hello, This is HomePage</h4>
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