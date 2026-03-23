import { countryData } from "../utils/Country"

export const getCountryByCode = (quary: string) => {
    if (!quary.trim()) return countryData
    return countryData.filter((country) =>
        country.phonecode.toString().includes(quary)
    )
}