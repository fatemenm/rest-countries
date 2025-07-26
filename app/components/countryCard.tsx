import Image from "next/image";
import { Country } from "../lib/definitions";
import Link from "next/link";

export function CountryCard({ country }: { country: Country }) {
  return (
    <Link
      href={`/country/${country.id}`}
      className="flex flex-col rounded-lg bg-white p-4 shadow-md"
    >
      <div className="relative h-32 w-full rounded-t-lg">
        <Image
          src={country.flagImage.src}
          alt={country.flagImage.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col p-8">
        <h2>{country.name.common}</h2>
        <ul className="gap-8s flex flex-col">
          <li className="text-gray-600">Population: {country.population}</li>
          <li className="text-gray-600">Region: {country.region}</li>
          <li className="text-gray-600">Capital: {country.capital}</li>
        </ul>
      </div>
    </Link>
  );
}
