import React, { Component } from 'react';
import Participant from './Participant';
import participants from './participants';
import Stage from './Stage';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Participant store = {participants} />
      <Stage store= {participants} />
      </React.Fragment>
    );
  }
}

export default App;
