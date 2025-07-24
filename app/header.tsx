import { Moon } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full flex justify-between px-4 py-8 shadow-md bg-white ">
      <h1 className="font-bold">Where in the World?</h1>
      <div className="flex gap-2">
        <Moon strokeWidth={1} />
        <span>Dark Mode</span>
      </div>
    </div>
  );
}
