import { countryData } from '../utils/Country';

export const getCountryByCode = (quary: string) => {
  console.log('country dsata==>', countryData);

  if (!quary.trim()) return countryData;
  return countryData.filter(country =>
    country.phonecode.toString().includes(quary),
  );
};
