"use client";

import { Country } from "@/app/lib/definitions";
import { CountryCard } from "@/app/components/countryCard";

export function CountryGrid({ countries }: { countries: Country[] }) {
  return (
    <div className="grid w-10/12 grid-cols-1 justify-items-center gap-12 self-center sm:grid-cols-2 md:w-full md:grid-cols-3 md:self-auto xl:grid-cols-4 xl:gap-16">
      {countries?.map((country: Country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
}
