import { getCountries, getCountryById } from "@/app/lib/data";
import * as React from "react";
import { Country as CountryType } from "@/app/lib/definitions";

import BackButton from "@/app/components/backButton";
import CountryLayout from "@/app/components/countryLayout";

interface CountryProps {
  params: Promise<{ countryId: string }>;
}

export async function generateStaticParams() {
  const countries = await getCountries();
  return countries.map((country) => ({
    countryId: country.id,
  }));
}

async function getBorders(country: CountryType) {
  if (country.borderIds && country.borderIds.length > 0) {
    const borderCountries = await Promise.all(
      country.borderIds.map((borderId) => getCountryById(borderId)),
    );
    return borderCountries.map((borderCountry) => ({
      id: borderCountry.id,
      name: borderCountry.name.common,
    }));
  } else return [];
}

export default async function Country({ params }: CountryProps) {
  const country = await getCountryById((await params).countryId);
  const borders = await getBorders(country);

  return (
    <div className="flex flex-col gap-16 px-8 py-10 text-base md:mx-auto md:w-11/12 md:px-0 xl:w-10/12">
      <BackButton />
      {country ? (
        <CountryLayout country={country} borders={borders} />
      ) : (
        <p className="text-very-dark dark:text-white">
          Loading country details...
        </p>
      )}
    </div>
  );
}
