import React, { Component } from 'react';
import Participant from './Participant';
import participants from './participants';
import Stage from './Stage';
import './App.css';
import Chat from './Chat';
import chatEvents from './chat-events'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ul class = "sidenav">
          <li><a href="#">Chat</a></li>
          <li><a href="#">Participants</a></li>
          <Participant store = {participants} />
          <Chat chats = {chatEvents} participants = {participants} />
        </ul>
        <Stage store= {participants} />
      </React.Fragment>
    );
  }
}

export default App;
