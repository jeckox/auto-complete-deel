export interface Country {
    code: string;
    label: string;
    phone: string;
}
export interface AutocompleteProps {
    placeholder: string;
    options: Country[];
    isLoading: boolean;
    onInputChange: (searchTerm: string) => void;
    onSelectedOption: (option: Country | null) => void;
}

export interface HighlightTextProps {
    text: string;
    highlight: string;
};

export interface UseDebounceProps {
    value: string;
    delay: number;
}

export interface UseAutocompleteProps {
    onInputChange: (searchTerm: string) => void;
    onSelectedOption: (option: Country | null) => void;
    isLoading: boolean;
    options: Country[];
}