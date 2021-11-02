import React from 'react';
import './sub-header.css';

function Examples({ex}){
    return(
        <p>miss the {ex}...</p>
    );
}

function Subheader(){
    return(
        <div>
            <h2>I hate this MF country</h2>
            <h2>Send me home!!!</h2>
            <Examples ex="food" />
            <Examples ex="people" />
            <Examples ex="vibe" />
            <Examples ex="everything to be honest" />
        </div>
    );
}

export default Subheader;