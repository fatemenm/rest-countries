"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Region } from "@/app/lib/definitions";

type FilterSelectProps = {
  selectedRegion: Region | undefined;
  onChangeRegion: (region: Region) => void;
};

export default function FilterSelect({
  selectedRegion,
  onChangeRegion,
}: FilterSelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative w-4/6">
      <button
        onClick={() => setIsOpen((prev: boolean) => !prev)}
        className="flex w-full justify-between rounded-md bg-white p-4 shadow-md"
      >
        <span>{selectedRegion ?? "Filter by Region"}</span>
        {isOpen ? <ChevronUp color="gray" /> : <ChevronDown color="gray" />}
      </button>
      <ul
        className={
          isOpen
            ? "absolute top-16 z-10 block w-full bg-white shadow-md"
            : "hidden"
        }
      >
        {Object.values(Region).map((region) => (
          <li className="bg-white px-4 py-2 hover:bg-gray-200" key={region}>
            <button
              onClick={() => {
                onChangeRegion(region);
                setIsOpen((prev: boolean) => !prev);
              }}
            >
              {region}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
