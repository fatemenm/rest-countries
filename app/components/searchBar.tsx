"use client";

import { Search } from "lucide-react";
import UseDebounce from "@/app/lib/useDebounce";

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
    <div className="dark:bg-dark-blue text-dark-gray flex h-14 items-center gap-4 rounded-md bg-white px-4 shadow-md md:w-3/6 xl:w-4/12 dark:text-white">
      <Search className="h-full" />
      <input
        onChange={onChangeWrapper}
        value={query}
        className="placeholder-dark-gray text-very-dark-blue dark:placeholder-very-light-gray h-full w-full focus:outline-none dark:text-white"
        type="search"
        placeholder="Search for a country..."
      />
    </div>
  );
}
