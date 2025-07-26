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
    <div className="text-very-dark-blue dark:bg-dark-blue relative h-14 w-4/6 rounded-md bg-white md:w-2/6 xl:w-2/12 dark:text-white">
      <button
        onClick={() => setIsOpen((prev: boolean) => !prev)}
        className="flex h-full w-full justify-between rounded-md p-4 shadow-md"
      >
        <span>{selectedRegion ?? "Filter by Region"}</span>
        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </button>
      <ul
        className={
          isOpen
            ? "text-very-dark-blue dark:bg-dark-blue absolute top-16 z-10 block w-full rounded-md bg-white shadow-md dark:text-white"
            : "hidden"
        }
      >
        {Object.values(Region).map((region, index, array) => (
          <li
            className={`px-4 py-1.5 ${index === 0 && "rounded-tl-md rounded-tr-md pt-4"} ${index === array.length - 1 && "rounded-br-md rounded-bl-md pb-4"}`}
            key={region}
          >
            <button
              className="w-full text-left"
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
