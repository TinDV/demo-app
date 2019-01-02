import React, { Component } from 'react';
import LiItem from './LiItem';

class Tweet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('https://5c2c6216ad36d90014f342b0.mockapi.io/api/v1/apiv1')
    .then(results => results.json())
    .then(data => this.setState({ posts: data }))
  }

  render() {
    return (
      <div className="listName">
        <ul>{ this.state.posts.map((post, index) => <LiItem name={post} key={index} />) }</ul>
      </div>
    );
  }
}

export default Tweet;