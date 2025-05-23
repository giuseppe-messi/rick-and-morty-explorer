interface Character {
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
  results: Character[];
}

const BASE_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async (
  query = "",
  page = 1
): Promise<Character[]> => {
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
