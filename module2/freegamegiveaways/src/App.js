import axios from "axios";
import FreeGameCard from "./Components/FreeGameCard";
import { useState, useEffect } from "react";
import "./style.css";

import "./App.css";

//const axios = require("axios");

function App() {

  const options = {
    method: "GET",
    url: "https://gamerpower.p.rapidapi.com/api/giveaways",
    headers: {
      "X-RapidAPI-Key": "e724419ccdmsh067f514ccaa3537p136cb4jsnb646c513aa1b",
      "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  const [freegames, setFreeGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(options.url);
      
      setFreeGames(data.data);
      console.log(data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1 className="header">All Live Giveaways</h1>
      <section className="cards">
        {freegames && freegames.map((game) => (
          <FreeGameCard 
          key={game.title} title={game.title} 
          description={game.description}
          instructions={game.instructions}
          platforms={game.platforms}
          open_giveaway_url={game.open_giveaway_url}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
