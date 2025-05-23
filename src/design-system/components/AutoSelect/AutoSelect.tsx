import { Autocomplete } from "../Autocomplete/Autocomplete";
import { useAutoComplete } from "../../hooks/useAutoComplete";
import { useState, useCallback, type ReactElement } from "react";

type Props<T> = {
  fetcher: (query: string, page: number) => Promise<T[]>;
  getOptionLabel: (opt: T) => string;
  getOptionKey: (opt: T) => string | number;
  placeholder?: string;
};

export function AutoSelect<T>({
  fetcher,
  getOptionKey,
  getOptionLabel,
  placeholder
}: Props<T>): ReactElement {
  const [query, setQuery] = useState("");
  const { items, loadMore, reloadLast } = useAutoComplete(fetcher, query, 300);

  const onChange = useCallback((q: string) => setQuery(q), []);

  return (
    <Autocomplete
      options={items}
      value={query}
      getOptionLabel={getOptionLabel}
      getOptionKey={getOptionKey}
      onChange={onChange}
      onLoadMore={loadMore}
      onOpen={reloadLast}
      placeholder={placeholder}
    />
  );
}
