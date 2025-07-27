import CountryExplorer from "@/app/components/countryExplorer";
import { getCountries } from "@/app/lib/data";

export default async function Home() {
  const initialCountries = await getCountries();
  return (
    <>
      <CountryExplorer initialCountries={initialCountries} />
    </>
  );
}
