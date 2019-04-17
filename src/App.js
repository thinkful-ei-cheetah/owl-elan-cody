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
  
  handleClick = () => {
    const chatElement = document.getElementById("chat");
    const chatClass = chatElement.getAttribute('id');
    if(chatClass === "chat") {
      this.setState({ chatOn: !this.state.chatOn})
    }
  }
  render() {
    return (
      <React.Fragment>
        <ul className = "sidenav">
        <div className="button-container" onClick={this.handleClick} >
          <button id="chat">Chat</button>
          <button id="participants"  >Participants</button>
        </div>
        {this.state.chatOn ? <Chat className="tablinks" chats = {chatEvents} participants = {participants} /> : <Participant className="tablinks" store = {participants} />}
        </ul>
        <Stage className="tablinks" store= {participants} />
      </React.Fragment>
    );
  }
}

export default App;
