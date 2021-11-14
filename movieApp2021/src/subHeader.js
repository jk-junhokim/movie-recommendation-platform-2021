import React from 'react';
import './subHeader.css';
import { useState, useEffect} from 'react';

function Examples({ex}){
    return(
        <p>miss {ex}...</p>
    );
}

// cleanup function. using "null" in the subheader function completely destroys the html content in "Intro" function
function Intro(){
    useEffect(function(){
        console.log("create :)");
        return () => console.log("deleted :("); // the cleanup function
    }, []);

    return(
       <h2>I hate this MF country</h2> 
    );
}

/*
function Intro (){
    function createFn(){
        console.log("create :)");
        return deleteFn;
    }
    function deleteFn(){
        console.log("deleted :(");
    }
    useEffect(createFn, []);

    return(
        <h2>I hate this MF country</h2>
    );
}
*/

function Subheader(){
    const [showing, introShowing] = useState(false);
    const onClickSubtitle = () => introShowing((prev) => !prev);
    return(
        <div>
            <button onClick={onClickSubtitle}>
                {showing ? "Hide Subheader Subtitle" : "Show Subheader Subtitle"}
            </button>
            {showing ? <Intro /> : null}
            <h4>Send me home!!!</h4>
            <Examples ex="the food, vibe, and people" />
            <Examples ex="everything to be honest" />
        </div>
    );
}

export default Subheader;