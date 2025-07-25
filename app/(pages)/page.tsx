"use client";

import SearchBar from "@/app/searchBar";
import { getCountries, getCountriesByRegion } from "@/app/lib/data";
import { CountryGrid } from "@/app/components/countryGrid";
import { useEffect, useState } from "react";
import { Country, Region } from "@/app/lib/definitions";
import FilterSelect from "@/app/components/filterSelect";

export default function Home() {
  const [countries, setCountries] = useState<Country[] | undefined>(undefined);
  const [selectedRegion, setSelectedRegion] = useState<Region | undefined>(
    undefined
  );
  useEffect(() => {
    async function fetchCountries() {
      if (selectedRegion) {
        const countries = await getCountriesByRegion(selectedRegion);
        setCountries(countries);
        return;
      }
      const countries = await getCountries();
      setCountries(countries);
    }
    fetchCountries();
  }, [selectedRegion]);
  if (!countries) return <div>data is not available</div>;
  return (
    <div className="flex flex-col p-5 gap-10">
      <SearchBar />
      <FilterSelect
        selectedRegion={selectedRegion}
        onChangeRegion={(region: Region) => setSelectedRegion(region)}
      />
      <CountryGrid countries={countries} />
    </div>
  );
}

//TODO: check the undefined countries handling
//TODO: add priority for the first image
