import React from "react";
import { EpisodesSelect } from "../../components/EpisodesSelect/EpisodesSelect";

const Episodes: React.FC = () => {
  return (
    <div>
      <h2 className="titleH2">Search for a R&amp;M episode</h2>
      <EpisodesSelect />
    </div>
  );
};

export default Episodes;
