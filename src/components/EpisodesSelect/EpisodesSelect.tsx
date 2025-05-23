import React, { useCallback } from "react";
import { AutoSelect } from "../../design-system/components/AutoSelect/AutoSelect";
import { fetchEpisodes } from "../../api/fetchEpisodes";

type Character = { id: number; name: string };

export const EpisodesSelect: React.FC = () => {
  const getOptionLabel = useCallback((opt: Character) => opt.name, []);
  const getOptionKey = useCallback((opt: Character) => opt.id, []);

  return (
    <AutoSelect
      fetcher={fetchEpisodes}
      getOptionLabel={getOptionLabel}
      getOptionKey={getOptionKey}
      placeholder="Search for episodes..."
    />
  );
};
