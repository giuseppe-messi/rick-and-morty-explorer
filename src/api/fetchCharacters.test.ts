import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchCharacters } from "./fetchCharacters";

interface Character {
  id: number;
  name: string;
}

const mockResults: Character[] = [
  { id: 1, name: "Person 1" },
  { id: 2, name: "Person 2" }
];

const mockResponse = {
  info: {
    count: 2,
    pages: 1,
    next: "",
    prev: ""
  },
  results: mockResults
};

describe("fetchCharacters fetch function", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("returns characters when fetch is OK", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    );

    const result = await fetchCharacters("rick", 2);
    expect(result).toEqual(mockResults);
  });

  it("returns empty array on non-OK response", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        json: () => Promise.resolve({})
      })
    );

    const result = await fetchCharacters();
    expect(result).toEqual([]);
  });

  it("returns empty array on fetch error", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("network down"))
    );

    const result = await fetchCharacters();
    expect(result).toEqual([]);
  });
});
