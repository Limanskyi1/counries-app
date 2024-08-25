
import { ICountryItem } from "@/types";
class CountriesService {
    
    public async fetchAllCountries(): Promise<ICountryItem[]> {
        try {
            const resp = await fetch("https://restcountries.com/v3.1/all",{ cache: 'force-cache' });
            if (!resp.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await resp.json();
            return data;
          } catch (error) {
            throw new Error(`Fetching countries failed: ${(error as Error).message}`);
          }
    }

    public async searchCountriesByName(query: string): Promise<ICountryItem[]> {
        try {
            const resp = await fetch(`https://restcountries.com/v3.1/name/${query}`,{ cache: 'force-cache' });
            if (!resp.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await resp.json();
            return data;
          } catch (error) {
            throw new Error(`Fetching countries failed: ${(error as Error).message}`);
          }
    }
}

export default new CountriesService();
