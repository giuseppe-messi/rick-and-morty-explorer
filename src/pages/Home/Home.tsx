import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => (
  <div className={styles.container}>
    <h2 className="titleH2">Welcome To The Rick And Morty Explorer</h2>
    <p className={styles.lead}>
      On this small site, you can use the links in the main navigation to jump
      to dedicated pages for Rick & Morty characters or episodes.
    </p>
    <p className={styles.lead}>
      Each page features the same reusable Autocomplete select input I built,
      just start typing and it’ll dynamically filter and suggest matching names
      or titles. Behind the scenes it’s the exact same component powering botj
      search box, showing how easily you can plug it into different data sets.
      Give it a try and have fun hunting down your favorite characters or
      episodes!
    </p>
  </div>
);

export default Home;
