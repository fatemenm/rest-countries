export interface CountryDto {
  name: Name;
  flags: { png: string; svg: string; alt: string };
  population: number;
  region: Region;
  capital: string[];
  cca3: string;
  subregion?: string;
  tld?: string[];
  currencies?: Currencies;
  languages?: Record<string, string>;
  borders?: string[];
}

export interface Country {
  id: string;
  name: Name;
  flagImage: FlagImage;
  population: number;
  region: Region;
  capital: string[];
  subregion?: string;
  tld?: string[];
  currencies?: Currencies;
  languages?: Record<string, string>;
  borderIds?: string[];
}

export type Currencies = Record<string, { name: string; symbol: string }>;

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}
export type NativeName = Record<string, { official: string; common: string }>;

export interface FlagImage {
  src: string;
  alt: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
  Antarctic = "Antarctic",
}
