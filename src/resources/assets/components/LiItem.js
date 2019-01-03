import React, { Component } from 'react';

class LiItem extends Component {

  render() {
    const {name} = this.props;
    
    return (
      <li><img src={name.avatar} alt="Avatar" />{name.name}</li>
    );
  }
}


export default LiItem;