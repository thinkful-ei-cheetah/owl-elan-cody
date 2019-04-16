import React from 'react';
import chatEvents from './chat-events';
import participants from './participants';

function Chat({chats, participants}) {

    const getTime = chats.map(item => {
        new Date(item.timestamps);
    })

    const participantsArray = participants.map(item => {
        return [item.id, item.name, item.avatar];
    });

    console.log(participantsArray);

    

    const chatList = chats.map(item => (
        <span>{item.participantId === participants.id ? [item.type, item.message, new Date(item.timestamp)] : null}</span>

        )
    )

    // const getType = chats.map(item => {

    // })

    // const findById = function(items) {
    //     items.find(item => item.id);
    // }

    // const participantsInChat = function(participants) {
    //     participants.find(item => {
    //         return {id: item.id, name: item.name, avatar: item.avatar}
    //     });
    // }
    // const getNameFromChat = findById(chats);

    // const nameList = getNameFromChat.map(item => {
    //     console.log(item);
    // })
    return (
        <div className="chat-container">
            {chats.id === participants.id ? [chats.type, chats.message, new Date(chats.timestamp)] : null}
        </div>
    )

}

export default Chat;