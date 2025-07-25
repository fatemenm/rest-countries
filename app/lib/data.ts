import { Country, CountryFromApi, Region } from "@/app/lib/definitions";

const baseURL = "https://restcountries.com/v3.1";

export async function getCountries() {
  try {
    const response = await fetch(
      baseURL + "/all?fields=name,flags,population,region,capital,cca3"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    const countries = data.map((country: CountryFromApi) => ({
      id: country.cca3,
      name: country.name,
      region: country.region,
      capital: country.capital,
      flagImage: {
        src: country.flags.png,
        alt: country.flags.alt,
      },
      population: country.population,
    })) as Country[];
    return countries;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getCountriesByRegion(region: Region) {
  try {
    const response = await fetch(
      baseURL +
        "/region/" +
        region.toLowerCase() +
        "?fields=name,region,flags,population,capital,cca3"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    const countries = data.map((country: CountryFromApi) => ({
      id: country.cca3,
      name: country.name,
      region: country.region,
      capital: country.capital,
      flagImage: {
        src: country.flags.png,
        alt: country.flags.alt,
      },
      population: country.population,
    })) as Country[];
    return countries;
  } catch (error) {
    console.error("Error:", error);
  }
}
