import { ReactNode } from "react";
import { Country, Currencies, NativeName } from "@/app/lib/definitions";

export default function CountryDetails({ country }: { country: Country }) {
  function formatValue<T>(value: T, renderFn?: (value: T) => ReactNode) {
    if (
      value === undefined ||
      value === null ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === "object" &&
        !Array.isArray(value) &&
        Object.keys(value).length === 0)
    )
      return null;
    if (renderFn) return renderFn(value);
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "string") return value;
    if (typeof value === "number") return value.toLocaleString("en-US");
    if (
      typeof value === "object" &&
      Object.values(value).every((v) => typeof v === "string")
    )
      return Object.values(value).join(", ");
  }

  function labeledListItem<T>(
    label: string,
    value: T,
    renderFn?: (value: T) => ReactNode,
  ) {
    const content = formatValue(value, renderFn);
    if (!content) return null;
    return (
      <li>
        <span className="font-semibold">{label}: </span>
        {content}
      </li>
    );
  }
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <h2 className="text-2xl font-bold sm:mt-0">{country.name.common}</h2>
      <div className="flex w-full flex-col gap-10 md:flex-row md:justify-between md:gap-16 lg:gap-8">
        <ul className="flex flex-col gap-2 md:w-1/2 lg:w-5/12">
          {labeledListItem(
            "Native Name",
            country.name.nativeName,
            (names: NativeName) =>
              Object.entries(names).map(([key, obj], index, array) => (
                <span key={key}>
                  {obj.common} ({key}){index !== array.length - 1 && ", "}
                </span>
              )),
          )}
          {labeledListItem("Population", country.population)}
          {labeledListItem("Region", country.region)}
          {labeledListItem("Sub Region", country.subregion)}
          {labeledListItem("Capital", country.capital)}
        </ul>
        <ul className="flex flex-col gap-2 md:w-1/2 lg:w-5/12">
          {labeledListItem("Top Level Domain", country.tld)}
          {country.currencies &&
            labeledListItem(
              "Currencies",
              country.currencies,
              (currencies: Currencies) =>
                Object.values(currencies).map((c, index, array) => (
                  <span key={c.name}>
                    {c.name}
                    {index !== array.length - 1 && ", "}
                  </span>
                )),
            )}
          {country.languages &&
            labeledListItem(
              "Languages",
              country.languages,
              (langs: Record<string, string>) =>
                Object.values(langs).map((value, index, array) => (
                  <span key={value}>
                    {value}
                    {index !== array.length - 1 && ", "}
                  </span>
                )),
            )}
        </ul>
      </div>
    </div>
  );
}
