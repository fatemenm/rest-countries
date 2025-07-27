import Image from "next/image";
import Link from "next/link";
import { Country } from "@/app/lib/definitions";

export default function CountryDetails({
  country,
  borders,
}: {
  country: Country;
  borders: { id: string; name: string }[];
}) {
  return (
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
          <h2 className="text-2xl font-bold sm:mt-0">{country.name.common}</h2>
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
  );
}
