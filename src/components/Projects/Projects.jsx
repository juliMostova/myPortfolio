//import { useState } from "react";
import barSite from "./../../assets/projectsCard/barSite.png";
import moviTheatre from "./../../assets/projectsCard/moviTheatre.png";
import travelTrip from "./../../assets/projectsCard/travelTrip.png";
import shoppingCard from "./../../assets/projectsCard/shoppingCard.png";
import styles from "./ProjectsStyle.module.css";
import { useTheme } from "./../ThemeContext";


const cardData = [
  {
    id: 1,
    title: "Bar",
    img: barSite,
    description: "This is a bar website",
    github: "https://github.com/juliMostova/bar-website",
    demo: "",
  },
  {
    id: 2,
    title: "Movie TV",
    img: moviTheatre,
    description: "Movie and TV streaming",
    github: "https://github.com/juliMostova/onlineMoviTheatreWithApi",
    demo: "https://julimostova.github.io/onlineMoviTheatreWithApi/",
  },
  {
    id: 3,
    title: "Travel",
    img: travelTrip,
    description: "Travel blog and trip planning",
    github: "https://github.com/juliMostova/Travel-",
    demo: "https://julimostova.github.io/",
  },
  {
    id: 4,
    title: "Shopping card",
    img: shoppingCard,
    description: "Online shopping cart",
    github: "https://github.com/juliMostova/shoppingCard",
    demo: "",
  },
];

function Projects() {
  const {theme} = useTheme();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.head}>Projects</h1>
      <div className={styles.table}>
        {cardData.map((card) => (
          <div key={card.id} className={styles.cell}>
            <div className={styles.card}>
              <div
                className={styles.front}
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>
              <div 
              className={`${styles.back} ${
                theme === 'dark'? styles.dark:""}`}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a
                
                href={card.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
              href={card.demo}
              target="_blank"
              rel="noopener noreferrer"
              >Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
