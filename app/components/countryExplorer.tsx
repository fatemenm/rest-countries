"use client";

import { Country, Region } from "@/app/lib/definitions";
import { CountryGrid } from "@/app/components/countryGrid";
import { useState } from "react";
import FilterSelect from "@/app/components/filterSelect";
import SearchBar from "@/app/components/searchBar";
import { getCountriesByRegion, searchCountriesByName } from "@/app/lib/data";

export default function CountryExplorer({
  initialCountries,
}: {
  initialCountries: Country[];
}) {
  const [countries, setCountries] = useState<Country[]>(initialCountries);
  const [selectedRegion, setSelectedRegion] = useState<Region | undefined>(
    undefined,
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  function handleChangeRegion(region: Region) {
    setSelectedRegion(region);
    setSearchQuery("");
    getCountriesByRegion(region).then((countries) => {
      setCountries(countries);
    });
  }

  function handleSearchQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  function handleSearchSubmit(query: string) {
    setSearchQuery(query);
    if (query) {
      setSelectedRegion(undefined);
      searchCountriesByName(query).then((countries) => {
        setCountries(countries);
      });
    } else {
      setCountries(initialCountries);
    }
  }

  if (!initialCountries)
    return (
      <div className="mt-10 flex justify-center">data is not available</div>
    );

  return (
    <div className="my-6 flex w-full flex-col gap-8 px-4 text-sm md:mx-auto md:w-11/12 md:px-0 xl:my-12 xl:w-10/12 xl:gap-12">
      <div className="md:gap-auto xl:gap-auto flex flex-col justify-between gap-8 md:flex-row">
        <SearchBar
          query={searchQuery}
          onSubmit={handleSearchSubmit}
          onChange={handleSearchQueryChange}
        />
        <FilterSelect
          selectedRegion={selectedRegion}
          onChangeRegion={handleChangeRegion}
        />
      </div>
      {countries.length === 0 && searchQuery ? (
        <div>{`No country found for: "${searchQuery}"`}</div>
      ) : (
        <CountryGrid countries={countries} />
      )}
    </div>
  );
}
