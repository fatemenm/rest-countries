import Image from "next/image";
import { Country } from "../lib/definitions";

export function CountryCard({ country }: { country: Country }) {
  return (
    <div className="bg-white flex flex-col shadow-md rounded-lg p-4">
      <div className="relative w-full h-32 rounded-t-lg">
        <Image
          src={country.flagImage.src}
          alt={country.flagImage.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col p-8">
        <h2>{country.name.common}</h2>
        <ul className="flex flex-col gap-8s">
          <li className="text-gray-600">Population: {country.population}</li>
          <li className="text-gray-600">Region: {country.region}</li>
          <li className="text-gray-600">Capital: {country.capital}</li>
        </ul>
      </div>
    </div>
  );
}

// <Image
//     src={country.src}
//     alt={`Flag of ${country.name}`}
//     className="w-full h-32 object-cover rounded-t-lg"
//   />
//   <h2 className="text-xl font-bold mt-4">{country.name}</h2>
//   <p className="text-gray-600">Population: {country.population}</p>
//   <p className="text-gray-600">Region: {country.region}</p>
//   <p className="text-gray-600">Capital: {country.capital}</p>
