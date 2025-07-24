"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FilterSelect() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative w-4/6">
      <button
        onClick={() => setIsOpen((prev: boolean) => !prev)}
        className="flex justify-between p-4 rounded-md bg-white shadow-md w-full"
      >
        <span>Filter by Region</span>
        {isOpen ? <ChevronUp color="gray" /> : <ChevronDown color="gray" />}
      </button>
      <ul
        className={
          isOpen
            ? "block absolute bg-white shadow-md rounded-md p-4 w-full top-16"
            : "hidden"
        }
      >
        <li className="py-1">Africa</li>
        <li className="py-1">America</li>
        <li className="py-1">Asia</li>
        <li className="py-1">Europe</li>
        <li className="py-1">Oceania</li>
      </ul>
    </div>
  );
}
