import { Country } from "@/app/lib/definitions";
import Link from "next/link";

interface BorderCountryListProps {
  country: Country;
  borders: {
    name: string;
    id: string;
  }[];
}

export default function BorderCountryList({
  country,
  borders,
}: BorderCountryListProps) {
  return (
    country.borderIds &&
    country.borderIds.length > 0 && (
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
    )
  );
}
