"use client";

import { Search } from "lucide-react";
import UseDebounce from "../lib/useDebounce";

type SearchBarProps = {
  onSubmit: (value: string) => void;
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({
  onSubmit,
  query,
  onChange,
}: SearchBarProps) {
  const debouncedSubmit = UseDebounce(() => {
    onSubmit(query);
  });

  const onChangeWrapper = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    debouncedSubmit();
  };

  return (
    <div className="flex h-16 items-center gap-4 rounded-md bg-white px-4 shadow-md">
      <Search className="h-full text-gray-400 hover:text-gray-900" />
      <input
        onChange={onChangeWrapper}
        value={query}
        className="h-full w-full focus:outline-none"
        type="search"
        placeholder="Search for a country..."
      />
    </div>
  );
}
