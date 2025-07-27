"use client";

import SearchBar from "@/app/components/searchBar";
import {
  getCountries,
  getCountriesByRegion,
  searchCountriesByName,
} from "@/app/lib/data";
import { CountryGrid } from "@/app/components/countryGrid";
import { useEffect, useState } from "react";
import { Country, Region } from "@/app/lib/definitions";
import FilterSelect from "@/app/components/filterSelect";

export default function Home() {
  const [countries, setCountries] = useState<Country[] | undefined>(undefined);
  const [selectedRegion, setSelectedRegion] = useState<Region | undefined>(
    undefined,
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

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
      getCountries().then((countries) => {
        setCountries(countries);
      });
    }
  }

  function handleChangeRegion(region: Region) {
    setSelectedRegion(region);
    setSearchQuery("");
    getCountriesByRegion(region).then((countries) => {
      setCountries(countries);
    });
  }

  useEffect(() => {
    getCountries().then((countries) => {
      setCountries(countries);
    });
  }, []);

  if (!countries)
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
