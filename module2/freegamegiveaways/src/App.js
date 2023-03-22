
import FreeGameCard from './Components/FreeGameCard';
import { getAllLiveGiveaways } from './services/gp-api';
import {useState, useEffect} from 'react';
import './style.css';

import './App.css';

function App() {
  const [freegames, setFreeGames] = useState([]);
  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await getAllLiveGiveaways();
      console.log(data.results);
      setFreeGames(data.results);
    }
    fetchData();
  },[]);
  return (
    <div className="App">
      <h1 className="header">All Live Giveaways</h1>
      <section className="cards">
        {freegames.map((game)=> (
          <FreeGameCard 
            key={game.title}
            title={game.title}
          />
        ))}
      </section>
      
    </div>
  );
}

export default App;
