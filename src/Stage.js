import React from 'react';
import "./Stage.css";

function Stage({store}) {
    const participantOnStage = store.map(item => item.onStage ?
        <div className="stage" key = {item.id}>
        <p>{item.name}</p>
        <img src={item.avatar} alt = "avatar" />
        </div>: null);
    return (
        <div className="stage-container">
            {participantOnStage}
        </div>
    )
   
}
export default Stage