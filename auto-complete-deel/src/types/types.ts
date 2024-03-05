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

export interface UseAutocompleteReturn {
    value: string;
    setShouldUpdate: (shouldUpdate: boolean) => void;
    showOptions: boolean;
    setValue: (value: string) => void;
    searchTerm: string;
    onInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onOptionClickHandler: (option: Country) => void;
    onFocusHandler: () => void;
    ref: React.RefObject<HTMLDivElement>;
}

export interface UseDebounceReturn {
    debouncedValue: string;
}

export interface SelectedOptionProps {
    selectedOption: Country;
}