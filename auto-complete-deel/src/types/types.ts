export interface Country {
    code: string;
    label: string;
    phone: string;
}
export interface AutocompleteProps {
    options: Country[];
    isLoading: boolean;
    onInputChange: (searchTerm: string) => void;
}