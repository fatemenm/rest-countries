export interface CountryDto {
  name: Name;
  flags: { png: string; svg: string; alt: string };
  population: number;
  region: Region;
  capital: string[];
  cca3: string;
}

export interface Country {
  id: string;
  name: Name;
  flagImage: FlagImage;
  population: number;
  region: Region;
  capital: string[];
}

export interface Name {
  common: string;
  official: string;
  nativeName: {
    ron: {
      official: string;
      common: string;
    };
  };
}

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
