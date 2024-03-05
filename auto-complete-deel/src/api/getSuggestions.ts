import type { Country } from "../types";

export const getSuggestions = async (searchTerm: string) => {
    if(searchTerm.length < 1) return [];
    const response = await fetch('/countries.json');
    const data = await response.json();
    return data.data.filter((country: Country) => country.label.toLowerCase().includes(searchTerm.toLowerCase()));
}