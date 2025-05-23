import { act, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useAutoComplete } from "./useAutoComplete";

vi.mock("../helpers/debounce", () => ({
  useDebouncedValue: (query: string) => query
}));

describe("useAutoComplete hook", () => {
  const PAGE1 = [{ id: 1, name: "item 1" }];
  const PAGE2 = [{ id: 2, name: "item 2" }];

  const fetcher = vi.fn();

  beforeEach(() => {
    fetcher.mockReset();
  });
  it("loads first page on mount and updates items and isLoading", async () => {
    fetcher.mockResolvedValueOnce(PAGE1);

    const { result } = renderHook(() => useAutoComplete(fetcher, "rick", 0));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.items).toEqual([]);

    await waitFor(() => expect(result.current.items).not.toHaveLength(0));

    expect(result.current.isLoading).toBe(false);
    expect(result.current.hasMore).toBe(true);
    expect(fetcher).toHaveBeenCalledWith("rick", 1);
  });

  it("appends more when loadMore is called and hasMore is true", async () => {
    fetcher
      .mockResolvedValueOnce(PAGE1) // initial
      .mockResolvedValueOnce(PAGE2); // second page

    const { result } = renderHook(() => useAutoComplete(fetcher, "", 0));

    await waitFor(() =>
      expect(result.current.items).toHaveLength(PAGE1.length)
    );

    act(() => {
      result.current.loadMore();
    });

    await waitFor(() =>
      expect(result.current.items).toHaveLength(PAGE1.length + PAGE2.length)
    );
    expect(result.current.items).toEqual([...PAGE1, ...PAGE2]);
    expect(fetcher).toHaveBeenCalledWith("", 2);
  });

  it("sets hasMore to false when fetcher returns empty page", async () => {
    fetcher
      .mockResolvedValueOnce(PAGE1) // initial
      .mockResolvedValueOnce([]); // second page empty

    const { result } = renderHook(() => useAutoComplete(fetcher, "", 0));
    await waitFor(() => expect(result.current.items).toEqual(PAGE1));
    act(() => void result.current.loadMore());
    await waitFor(() => expect(result.current.hasMore).toBe(false));

    expect(result.current.hasMore).toBe(false);
    expect(result.current.items).toEqual(PAGE1);
  });
});
