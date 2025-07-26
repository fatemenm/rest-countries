import { CountryDto, Region, Country } from "@/app/lib/definitions";

const baseURL = "https://restcountries.com/v3.1";
const fields = "name,flags,population,region,capital,cca3";

export async function getCountries() {
  const response = await fetch(`${baseURL}/all?fields=${fields}`);
  if (!response.ok)
    throw new Error(`Failed to get countries: ${response.statusText}`);

  const data: CountryDto[] = await response.json();
  return data.map(CountryFromDto);
}

export async function getCountriesByRegion(region: Region) {
  const response = await fetch(
    `${baseURL}/region/${region.toLowerCase()}?fields=${fields}`,
  );

  if (!response.ok)
    throw new Error(
      `Failed to get countries by region: ${response.statusText}`,
    );

  const data: CountryDto[] = await response.json();
  return data.map(CountryFromDto);
}

export async function searchCountriesByName(name: string) {
  const response = await fetch(
    `${baseURL}/name/${name.trim()}?fields=${fields}`,
  );

  if (response.status === 404) return [];
  if (!response.ok)
    throw new Error(
      `Failed to search countries by name: ${response.statusText}`,
    );

  const data: CountryDto[] = await response.json();
  return data.map(CountryFromDto);
}

function CountryFromDto(dto: CountryDto): Country {
  return {
    id: dto.cca3,
    name: dto.name,
    flagImage: {
      src: dto.flags.png,
      alt: dto.flags.alt,
    },
    population: dto.population,
    region: dto.region as Region,
    capital: dto.capital,
  };
}
