import React from 'react';

function Food({fav}){
    return <h3>I like {fav}</h3>;
}

function App() {
  return (
      <div>
        <h1>Please send me to the States</h1>
        <Food fav="1$ pizza" />
        <Food fav="chipotle" />
        <Food fav="whataburger" />
        <Food fav="taco" />
      </div>
  );
}

export default App;
