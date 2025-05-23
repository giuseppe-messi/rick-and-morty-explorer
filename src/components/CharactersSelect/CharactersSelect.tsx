import React, { useCallback } from "react";
import { AutoSelect } from "../../design-system/components/AutoSelect/AutoSelect";
import { fetchCharacters } from "../../api/fetchCharacters";

type Character = { id: number; name: string };

export const CharactersSelect: React.FC = () => {
  const getOptionLabel = useCallback((opt: Character) => opt.name, []);
  const getOptionKey = useCallback((opt: Character) => opt.id, []);

  return (
    <AutoSelect
      fetcher={fetchCharacters}
      getOptionLabel={getOptionLabel}
      getOptionKey={getOptionKey}
      placeholder="Search Rick & Morty…"
    />
  );
};
