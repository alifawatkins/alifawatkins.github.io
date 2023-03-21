import logo from './logo.svg';
import StarShipCard from './components/StarShipCard';
import { getAllStarships } from './services/sw-api';
import {useState, useEffect} from 'react';
import './style.css';

import './App.css';

function App() {
  const [starships, setStarships] = useState([]);
  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await getAllStarships();
      console.log(data.results);
      setStarships(data.results);
    }
    fetchData();
  },[]);
  return (
    <div className="App">
      <h1 className="header">Star Wars Starships...WERE MEANT TO FLYYYYY</h1>
      <section className="cards">
        {starships.map((ship)=> (
          <StarShipCard 
            key={ship.name}
            name={ship.name}
          />
        ))}
      </section>
      
    </div>
  );
}

export default App;
