// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [randomDogPic, setRandomDogPic] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setRandomDogPic(data.message);
        });
    }, []);

    if (!randomDogPic) return <p>Loading ...</p>;

    return <img src={randomDogPic} alt="A Random Dog" />
}

export default App;