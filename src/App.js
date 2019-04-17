import React, { Component } from 'react';
import Participant from './components/Participant';
import participants from './participants';
import Stage from './components/Stage';
import './styles/App.css';
import Chat from './components/Chat';
import chatEvents from './chat-events'

class App extends Component {
  state = {
    chatOn: false
  }
  handleChatClick = (e) => {
    if(document.querySelector(e.currentTarget) === ".chat") {
      this.setState({ chatOn: !this.state.chatOn})
    }
  }
  render() {
    return (
      <React.Fragment>
        <ul className = "sidenav">
        <div className="button-container" onClick={this.handleClick}>
          <button className="chat" >Chat</button>
          <button className="participants"  >Participants</button>
        </div>
        {this.state.chatOn ? <Participant className="tablinks" store = {participants} /> : <Chat className="tablinks" chats = {chatEvents} participants = {participants} />}

        </ul>
        <Stage className="tablinks" store= {participants} />
      </React.Fragment>
    );
  }
}

export default App;
