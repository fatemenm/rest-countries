import { Country } from "@/app/lib/definitions";
import Link from "next/link";
import FlagImage from "@/app/components/FlagImage";

export function CountryCard({ country }: { country: Country }) {
  return (
    <Link
      href={`/country/${country.id}`}
      className="text-very-dark-blue dark:bg-dark-blue flex w-full flex-col rounded-md bg-white shadow-md dark:text-white"
    >
      <FlagImage
        containerClass="rounded-t-md"
        src={country.flagImage.src}
        alt={country.flagImage.alt}
        imageClass="rounded-t-md object-cover"
      />
      <div className="flex flex-col gap-3 px-6 py-8">
        <h2 className="text-xl font-bold">{country.name.common}</h2>
        <ul className="flex flex-col gap-1">
          <li>
            <span className="mr-1 font-semibold">Population:</span>
            <span>{country.population.toLocaleString("en-US")}</span>
          </li>
          <li>
            <span className="mr-1 font-semibold">Region:</span>
            <span>{country.region}</span>
          </li>
          <li>
            <span className="mr-1 font-semibold">Capital:</span>
            <span>{country.capital}</span>
          </li>
        </ul>
      </div>
    </Link>
  );
}
