import { countryData } from '../utils/Country';

export const getCountryByCode = (quary: string) => {
  const searchTerm = quary.trim().toLowerCase();
  if (!searchTerm) return countryData;

  return countryData.filter(country =>
    country.name.toLowerCase().includes(searchTerm) ||
    country.phonecode.includes(searchTerm),
  );
};
