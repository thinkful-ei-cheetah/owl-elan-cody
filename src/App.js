import React, { Component } from 'react';
import Participant from './Participant';
import participants from './participants';
import './App.css';

class App extends Component {
  render() {
    return (
      <Participant store = {participants} />
    );
  }
}

export default App;
