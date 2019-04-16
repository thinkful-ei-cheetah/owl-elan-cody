import React, { Component } from 'react';
import Participant from './Participant';
import participants from './participants';
import Stage from './Stage';
import './App.css';
import Chat from './Chat';
import chatEvents from './chat-events'

class App extends Component {
  handleClick = () =>{
    return {"chats hidden":"hidden"}
  }
  render() {
    return (
      <React.Fragment>
        <ul className = "sidenav">
        <div className="button-container">
          <button className="chat" onClick={this.handleClick}>Chat</button>
          <button className="participants" >Participants</button>
        </div>
          <Participant store = {participants} />
          <Chat chats = {chatEvents} participants = {participants} />
        </ul>
        <Stage store= {participants} />
      </React.Fragment>
    );
  }
}

export default App;
