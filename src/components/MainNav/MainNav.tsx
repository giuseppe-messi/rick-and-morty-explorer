import React from "react";
import styles from "./MainNav.module.css";
import { NavLink } from "react-router-dom";

export const MainNav: React.FC = () => (
  <header role="banner">
    <h1>Rick &amp; Morty Explorer</h1>
    <nav aria-label="Primary" role="navigation">
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/characters"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/episodes"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Episodes
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
