import React from 'react';

function Stage({store}) {
    const participantOnStage = store.map(item => item.onStage ?
        <div className="stage" key = {item.id}>
        <img src={item.avatar} alt = "avatar" />
        {item.name}
        </div>: null);
        
    return (
        <div className="stage-container">
            {participantOnStage}
        </div>
    )
   
}
export default Stage