import SearchBar from "@/app/searchBar";

import FilterSelect from "@/app/filterSelect";

export default function Home() {
  return (
    <div className="flex flex-col p-5 gap-10">
      <SearchBar />
      <FilterSelect />
    </div>
  );
}
