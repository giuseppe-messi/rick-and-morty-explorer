interface Episode {
  id: number;
  name: string;
}

interface Response {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Episode[];
}

const BASE_URL = "https://rickandmortyapi.com/api/episode/";

export const fetchEpisodes = async (
  query = "",
  page = 1
): Promise<Episode[]> => {
  try {
    const url = new URL(BASE_URL);

    if (query) {
      url.searchParams.set("name", query);
    }
    url.searchParams.set("page", String(page));

    const res = await fetch(url.toString());

    if (!res.ok) {
      console.error(`Rick & Morty API error: ${res.status}`);
      return [];
    }

    const data = (await res.json()) as Response;
    return data.results.map(({ id, name }) => ({ id, name }));
  } catch (err: unknown) {
    console.error("Rick & Morty API error:", err);
    return [];
  }
};
