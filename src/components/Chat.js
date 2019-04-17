import React from 'react';
import '../styles/Chat.css';

function Chat({chats, participants}) {

    const timeOptions = { hour : '2-digit', minute: '2-digit' }
    const participantIds = participants.map(item => item.id);


    const chatList = chats
    .filter(chat => participantIds.includes(chat.participantId))
    .map(chat => {
        const participant = participants.find(participant => participant.id === chat.participantId)
        return (
        <div className="content">
            <img src ={participant.avatar} alt = {participant.name}/>
            <span><b>{participant.name}</b></span>
            <span>{new Date(chat.timestamp).toLocaleString("en-US", timeOptions)}</span>
            <span>{chat.type === 'message' ? chat.message : chat.type}</span>
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