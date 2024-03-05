import { useEffect,  useState, useMemo, useRef} from "react";
import { useDebounce } from "./useDebounce";
import type { Country, UseAutocompleteProps, UseAutocompleteReturn } from "../types";

export const useAutocomplete = ({onInputChange, onSelectedOption, options, isLoading}: UseAutocompleteProps): UseAutocompleteReturn => {
    const [value, setValue] = useState<string>('');
    const [visibleOptions, setVisibleOptions] = useState<boolean>(true);
    const [shouldUpdate, setShouldUpdate] = useState<boolean>(false);
    const {debouncedValue: searchTerm} = useDebounce({value, delay: 300});

    useEffect(() => {
        if(shouldUpdate){
        onInputChange(searchTerm);
        setShouldUpdate(false);
        }
    }, [searchTerm, onInputChange]);

    const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === ''){
          onSelectedOption(null);
        }
        setVisibleOptions(true);
        setShouldUpdate(true);
        setValue(e.target.value);
    };
    
    const onOptionClickHandler = (option: Country) => {
        setShouldUpdate(false);
        setValue(option.label);
        onSelectedOption(option);
    };

    const onFocusHandler = () => {
        setVisibleOptions(true);
    };
      

    const showOptions = useMemo(() => options.length > 0 && !isLoading && visibleOptions, [options, isLoading, visibleOptions]);

    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setVisibleOptions(false);
            }
        };
            document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return {value, setShouldUpdate, showOptions, setValue, searchTerm, onInputChangeHandler, onOptionClickHandler, ref, onFocusHandler};
};