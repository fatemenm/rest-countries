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

interface Border {
  id: string;
  name: string;
}

export default function Country({ params }: CountryProps) {
  const { countryId } = React.use(params);
  const [country, setCountry] = useState<CountryType | null>(null);
  const [borders, setBorders] = useState<Border[]>([]);
  const router = useRouter();

  function getBorders(country: CountryType) {
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
  }

  useEffect(() => {
    getCountryById(countryId).then((country) => {
      setCountry(country);
      getBorders(country);
    });
  }, [countryId]);
  return (
    <div className="flex flex-col gap-16 px-8 py-10 text-base md:mx-auto md:w-11/12 md:px-0 xl:w-10/12">
      <div className="w-full">
        <button
          onClick={() => router.back()}
          className="text-very-dark-blue dark:bg-dark-blue flex cursor-pointer items-center gap-2 rounded-md bg-white p-4 px-4 py-2 shadow dark:text-white"
        >
          <ArrowLeft />
          Back
        </button>
      </div>
      {country && (
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="relative aspect-[5/3] w-full sm:w-2/3 lg:w-5/12">
            <Image
              fill
              priority
              src={country.flagImage.src}
              alt={country.flagImage.alt}
              className="object-contain object-top"
            />
          </div>
          <div className="flex flex-col gap-12 sm:w-1/2 md:w-full lg:w-6/12 lg:gap-12">
            <div className="flex flex-col gap-4 lg:gap-6">
              <h2 className="text-2xl font-bold sm:mt-0">
                {country.name.common}
              </h2>
              <div className="flex w-full flex-col gap-10 md:flex-row md:justify-between md:gap-16 lg:gap-8">
                <ul className="flex flex-col gap-2 md:w-1/2 lg:w-5/12">
                  <li>
                    <span className="font-semibold"> Native Name: </span>
                    {Object.keys(country.name.nativeName).map(
                      (key: string, index) => {
                        return (
                          <span key={key}>
                            {country.name.nativeName[key].common} ({key})
                            {index ===
                            Object.keys(country.name.nativeName).length - 1
                              ? ""
                              : ", "}
                          </span>
                        );
                      },
                    )}
                  </li>
                  <li>
                    <span className="font-semibold">Population: </span>
                    {country.population.toLocaleString("en-US")}
                  </li>
                  <li>
                    <span className="font-semibold">Region: </span>
                    {country.region}
                  </li>
                  <li>
                    <span className="font-semibold">Sub Region: </span>
                    {country.subregion}
                  </li>
                  <li>
                    <span className="font-semibold">Capital: </span>
                    {country.capital}
                  </li>
                </ul>
                <ul className="flex flex-col gap-2 md:w-1/2 lg:w-5/12">
                  <li>
                    <span className="font-semibold">Top Level domain: </span>
                    {country.tld?.map((item, index, array) => {
                      return (
                        <span key={item}>
                          {item}
                          {index !== array.length - 1 && ", "}
                        </span>
                      );
                    })}
                  </li>
                  {country?.currencies && (
                    <li>
                      <span className="font-semibold">Currencies: </span>
                      {Object.keys(country.currencies)[0]}
                    </li>
                  )}
                  {country?.languages && (
                    <li>
                      <span className="font-semibold">Languages: </span>
                      {Object.entries(country.languages).map(
                        ([key, value], index, array) => (
                          <span key={key}>
                            {value}
                            {index === array.length - 1 ? "" : ", "}
                          </span>
                        ),
                      )}
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {country.borderIds && country.borderIds.length > 0 && (
              <div className="flex flex-col gap-2 lg:mt-0 lg:flex-row lg:gap-6">
                <h3 className="text-lg font-semibold text-nowrap lg:text-base">
                  Border Countries:
                </h3>
                <div className="flex flex-wrap gap-2 md:mt-0">
                  {borders.map((border) => (
                    <Link
                      href={`/country/${border.id}`}
                      key={border.id}
                      className="text-very-dark-blue dark:bg-dark-blue dark:text-very-light-gray rounded-md bg-white px-4 py-1 text-sm shadow"
                    >
                      {border.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {!country && (
        <p className="text-very-dark dark:text-white">
          Loading country details...
        </p>
      )}
    </div>
  );
}
