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
            <span>{participant.name}</span>
            <img src ={participant.avatar} alt = {participant.name}/>
            <span>{chat.type === 'message' ? chat.message : chat.type}</span>
            <span>{new Date(chat.timestamp).toISOString()}</span>
        </div>
        )}

    )
    console.log(chats);
    console.log(chatList)
    
    return (
            <div className="chats hidden">
                {chatList}
            </div>    
    )

}

export default Chat;