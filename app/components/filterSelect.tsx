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
        className="flex justify-between p-4 rounded-md bg-white shadow-md w-full"
      >
        <span>{selectedRegion ?? "Filter by Region"}</span>
        {isOpen ? <ChevronUp color="gray" /> : <ChevronDown color="gray" />}
      </button>
      <ul
        className={
          isOpen
            ? "block absolute z-10 bg-white shadow-md rounded-md p-4 w-full top-16"
            : "hidden"
        }
      >
        {Object.values(Region).map((region) => (
          <li className="py-1" key={region}>
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
