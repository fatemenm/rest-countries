import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="px-8 py-4 rounded-md bg-white shadow-md flex items-center gap-4">
      <Search color="gray" />
      <input type="search" placeholder="Search for a country..." />
    </div>
  );
}
