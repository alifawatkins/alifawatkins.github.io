import { Link } from "react-router-dom";
import "../App.css"

import React, { useState } from 'react';

function Portfolio() {
    return (
        <div>
            <h1>Projects</h1>
            <figure>
                <a href="https://alifawatkins.github.io/vtuberDebut/">
                <img src="https://cdn.discordapp.com/attachments/761768235350622228/1090364377410048050/vtuberscreenshot.png" alt="Image description" width="50%"/>
                </a>
                <figcaption>VTuber Debut Game built with HTML, CSS, and JavaScript</figcaption>
            </figure>
            
        </div>
      );
    }

export default Portfolio;