import React from 'react';
import './subHeader.css';
import { useState, useEffect} from 'react';

function Examples({ex}){
    return(
        <p>miss the {ex}...</p>
    );
}

function Intro(){
    useEffect(() => {
        console.log("create :)");
        return () => console.log("destroyed");
    }, []);
    return(
       <h2>I hate this MF country</h2> 
    );
}

function Subheader(){
    const [showing, introShowing] = useState(false);
    const onClickSubtitle = () => introShowing((prev) => !prev);
    return(
        <div>
            <button onClick={onClickSubtitle}>{showing ? "Hide Subtitle" : "Show Subtitle"}</button>
            {showing ? <Intro /> : null}
            <h4>Send me home!!!</h4>
            <Examples ex="food" />
            <Examples ex="people" />
            <Examples ex="vibe" />
            <Examples ex="everything to be honest" />
        </div>
    );
}

export default Subheader;