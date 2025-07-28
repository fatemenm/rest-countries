import { Country } from "@/app/lib/definitions";
import FlagImage from "@/app/components/flagImage";
import BorderCountryList from "@/app/components/borderCountryList";

import CountryDetails from "./countryDetails";

export default function CountryLayout({
  country,
  borders,
}: {
  country: Country;
  borders: { id: string; name: string }[];
}) {
  return (
    <div className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between">
      <FlagImage
        containerClass="sm:w-2/3 lg:w-5/12"
        src={country.flagImage.src}
        alt={country.flagImage.alt}
        imageClass="object-contain object-top"
      />
      <div className="flex flex-col gap-12 sm:w-1/2 md:w-full lg:w-6/12 lg:gap-12">
        <CountryDetails country={country} />
        <BorderCountryList country={country} borders={borders} />
      </div>
    </div>
  );
}
