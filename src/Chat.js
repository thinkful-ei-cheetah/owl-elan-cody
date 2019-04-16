import React from 'react';
import './Chat.css';

function Chat({chats, participants}) {


    const participantIds = participants.map(item => item.id);


    const chatList = chats
    .filter(chat => participantIds.includes(chat.participantId))
    .map(chat => {
        const participant = participants.find(participant => participant.id === chat.participantId)
        return (
        <div className="content">
            <img src ={participant.avatar} alt = {participant.name}/>
            <p>{participant.name}</p>
            <span>{chat.type === 'message' ? chat.message : chat.type}</span>
            <span>{new Date(chat.timestamp).toISOString()}</span>
        </div>
        )}

    )
    console.log(chats);
    console.log(chatList)
    
    return (
            <div className="chat-hidden">
                {chatList}
            </div>    
    )

}

export default Chat;