// import useEffect
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import Axios (or use Fetch)

function App() {
  /**
   * Set up state and make AJAX requests here
   *
   *
   */

const [characters, setCharacters] =useState([]);

const [image, setImage] = useState("");
const [name, setName] = useState("");

useEffect(() => {
  axios("https://rickandmortyapi.com/api/character/").then((resp) => {
    setCharacters(resp.data.results);
  });
}, []);

const getCharacter = (id => {
  axios(`https://rickandmortyapi.com/api/character/${id}`).then((resp) => {
    setImage(resp.data.image);
    setName(resp.data.name);
  });
});
};

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}

            <img  height="250" />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select id="dropdown" type="text">
              <option></option>
              {/**
               * Loop through all characters. The value should be the character id.
               * @example in HTML
               * <option value="2" key="character-1">Morty Smith</option>
               */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
