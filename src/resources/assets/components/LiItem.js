import React, { Component } from 'react';

class LiItem extends Component {
  
  render() {
    const {name} = this.props;
    console.log(name);
    return (
      <li>{name.name}</li>
    );
  }
}

export default LiItem;