import React from "react";
import { Link } from "react-router-dom";
import { getHellWeather } from "../services/owm-api";
import { useState, useEffect } from "react";

function Header() {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    const fetchData = async () => {
        const data = await getHellWeather();
        console.log(data);
        setWeather(data);
      };
    fetchData();
  }, []);
  return (
    <header className="nav">
      <div className="about">
        <Link to="/about">ABOUT</Link>
      </div>
      <div className="portfolio">
        <Link to="/portfolio">PORTFOLIO</Link>
      </div>

      <div className="contact">
        <Link to="/contact">CONTACT</Link>
      </div>
      <div className="weather">
        <p>The temperature in Hell is: {weather.list[0].main.temp}</p>
      </div>
    </header>
  );
}

export default Header;
