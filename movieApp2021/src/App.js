import React from 'react';
import './App.css';
import Subheader from './subHeader.js';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const foodILike = [
    {
        id: 1,
        name: "1$ pizza",
        image: "https://i.pinimg.com/originals/36/8b/13/368b1393435bed204bb7c4c3fe57ec18.jpg",
        rating: 4.9
    },
    {
        id: 2,
        name: "chipotle",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPNd8yVn8BCWkBMZBQAXOGiP7Jg8bYuIX_5Zlev2dzi4UZqKxP0OihSSvmiUVTNl_un0&usqp=CAU",
        rating: 4.5
    },
    {
        id: 3,
        name: "whataburger",
        image: "https://bloximages.newyork1.vip.townnews.com/nashvillepost.com/content/tncms/assets/v3/editorial/2/70/270ef5dc-ef16-11eb-92f1-6794ec8d7d72/61006774909d7.image.png?crop=591%2C436%2C4%2C1",
        rating: 3.5
    },
    {
        id: 4,
        name: "texas barbeque",
        image: "https://images.squarespace-cdn.com/content/v1/564fd6dae4b02ba778f741df/1608166318032-BQQP0M0WXOFEQ616892Z/Plate.jpg?format=2500w",
        rating: 4.8
    }
]

function Food({name, picture, rating}){
    return (
    <div>
        <h3>I like {name}</h3>
        <p>Rating: {rating}</p>
        <img src={picture} alt={name} />
    </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired
}

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");

    const onClick = () => setValue(
        (prev) => prev + 1
    );
    const onChange = (event) => setKeyword(
        event.target.value
    );

    console.log("I run all the time."); 
    // always gets rendered when parent state or function is modified

    // reactjs will always refresh your UI when a component (data) is changed. we can choose by using useEffect
    // useEffect() : choose when to call certain functions & effects
    useEffect(() => {
        console.log("I run only once.");
    }, []); // without keyword, the useEffect function will only run once (empty list)
    useEffect(() => {
        console.log("I run when 'counter' changes.");
    }, [counter]);
    useEffect(() => {
        console.log("I run when 'counter' or 'keyword' changes.");
    }, [counter, keyword]);
    useEffect(() => {
        if (keyword !== "" && keyword.length > 5){
        console.log("I run when 'keyword' changes.");
        }
    }, [keyword]);

    // console.log("Search for", keyword); // want this to change only when keyword is modified

    return (
        <div>
            <h1>Please send me to the States</h1>
            <h2>{counter}</h2>
            <div>
                <button onClick={onClick}>click me!</button>
            </div>

            <input // make input
                value={keyword} // get input value
                onChange={onChange} // give event listner
                type="text" 
                placeholder="Search here..." 
            />

            <Subheader />
        
            {foodILike.map(dish => (
                <Food 
                key={dish.id}
                name={dish.name}
                picture={dish.image}
                rating={dish.rating} />
            ))}
        </div>
    );
}

export default App;
