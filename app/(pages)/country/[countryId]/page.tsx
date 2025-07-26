"use client";

import { getCountryById } from "@/app/lib/data";
import { useEffect, useState } from "react";
import * as React from "react";
import { Country as CountryType } from "@/app/lib/definitions";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CountryProps {
  params: Promise<{ countryId: string }>;
}

export default function Country({ params }: CountryProps) {
  const { countryId } = React.use(params);
  const [country, setCountry] = useState<CountryType | null>(null);
  const [borders, setBorders] = useState<
    {
      name: string;
      id: string;
    }[]
  >([]);
  const router = useRouter();

  useEffect(() => {
    getCountryById(countryId).then((country) => {
      setCountry(country);
      if (country.borderIds) {
        Promise.all(
          country.borderIds.map((borderId) => getCountryById(borderId)),
        ).then((borders) => {
          setBorders(
            borders.map((border) => ({
              name: border.name.common,
              id: border.id,
            })),
          );
        });
      } else {
        setBorders([]);
      }
    });
  }, [countryId]);
  return (
    <div className="flex flex-col gap-16 px-8 py-10">
      <div className="w-full">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-gray-100 p-4 px-4 py-2 text-gray-600 shadow hover:text-gray-900"
        >
          <ArrowLeft />
          Back
        </button>
      </div>
      <div className="flex flex-col items-center gap-8">
        {country && (
          <div className="flex w-full flex-col">
            <div className="relative h-50 w-full">
              <Image
                fill
                src={country.flagImage.src}
                alt={country.flagImage.alt}
                className="object-cover"
              />
            </div>
            <h2 className="mt-4 text-2xl font-bold">{country.name.common}</h2>
            <ul className="flex flex-col gap-2 text-lg text-gray-600">
              <li>
                Native Name:{" "}
                {Object.keys(country.name.nativeName).map(
                  (key: string, index) => {
                    return (
                      <span className="px-1" key={key}>
                        {country.name.nativeName[key].common} ({key})
                        {index ===
                        Object.keys(country.name.nativeName).length - 1
                          ? ""
                          : ","}
                      </span>
                    );
                  },
                )}
              </li>
              <li>Population: {country.population}</li>
              <li>Region: {country.region}</li>
              <li>Sub Region: {country.subregion}</li>
              <li>Capital: {country.capital}</li>
              <li>Top Level domain: {country.tld}</li>
              {country?.currencies && (
                <li>Currencies: {Object.keys(country.currencies)[0]}</li>
              )}
              <li>Top Level domain: {country.tld}</li>
              {country?.languages && (
                <li>
                  Languages:{" "}
                  {Object.entries(country.languages).map(
                    ([key, value], index, array) => (
                      <span className="px-1" key={key}>
                        {value}
                        {index === array.length - 1 ? "" : ","}
                      </span>
                    ),
                  )}
                </li>
              )}
            </ul>
            {country.borderIds && country.borderIds.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Border Countries:</h3>
                <ul className="flex flex-wrap gap-2">
                  {borders.map((border) => (
                    <li
                      key={border.id}
                      className="rounded bg-gray-200 px-2 py-1 text-sm"
                    >
                      <Link href={`/country/${border.id}`}>{border.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        {!country && (
          <p className="text-gray-600">Loading country details...</p>
        )}
      </div>
    </div>
  );
}
