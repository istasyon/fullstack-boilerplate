import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  async componentDidMount() {
    const { data } = await axios.get('/hello');
    console.log(data.msg);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
