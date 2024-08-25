export interface Currency {
    [key: string]: {
        name: string;
        symbol: string;
      };
}
export interface Languages {
    [key: string]: {
        name: string;
        symbol: string;
      };
}
export interface ICountryItem {
    name: {
        [key:string]:string
    };
    topLevelDomain: string[],
    tld:string[]
    alpha2Code: string,
    alpha3Code: string,
    capital: string,
    altSpellings: string[],
    subregion: string,
    region: string,
    population: number,
    area: number,
    borders: string[],
    nativeName: string,
    flag: string,
    flags: {
        [key:string]: string,
    }
    currencies : Currency
    languages: Languages,
    cca3: string,

}



