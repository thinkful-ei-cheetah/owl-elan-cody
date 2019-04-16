import React from 'react';
import './Participant.css'


function Participant({store}) {
    const participantsArray = store.map(item => 
    <li key = {item.id}>
        <img src={item.avatar} alt = "avatar" />
        {item.name}<br />
        {item.inSession ? 'in session ' : 'left session'}
        {item.onStage ? 'on stage' : null}
    </li>)
    if (store.onStage && store.inSession) {
        store.onStage = !store.onStage;
        store.inSession = !store.inSession;
    }
    return (
        <ul>
            {participantsArray}
        </ul>
    );
}

export default Participant;