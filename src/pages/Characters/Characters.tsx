import React from "react";
import { CharactersSelect } from "../../components/CharactersSelect/CharactersSelect";

const Characters: React.FC = () => {
  return (
    <div>
      <h2 className="titleH2">Search for a R&amp;M Character</h2>
      <CharactersSelect />
    </div>
  );
};

export default Characters;
