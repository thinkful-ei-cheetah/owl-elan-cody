import React from 'react';
import './Participant.css'


function Participant({store}) {
    const participantsArray = store.map(item => 
    <li key = {item.id}>
        <img src={item.avatar} alt = "avatar" />
        {item.name}<br />
        {item.inSession ? 'in session ' : 'left session'}
    </li>)
    return (
        <ul>
            {participantsArray}
        </ul>
    );
}

export default Participant;