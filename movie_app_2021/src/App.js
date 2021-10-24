import React from 'react';

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

function Food({name, picture}){
    return (
    <div>
        <h3>I like {name}</h3>
        <img src={picture} alt={name} />
        <h3>GRASS</h3>
        <h4>dir, cd movie_app_2021, dir, npm start</h4>
    </div>
    );
}

function App() {
  return (
      <div>
        <h1>Please send me to the States</h1>
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
