"use client";

import { Country } from "@/app/lib/definitions";
import { CountryCard } from "@/app/components/countryCard";

export function CountryGrid({ countries }: { countries: Country[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
      {countries?.map((country: Country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
}
