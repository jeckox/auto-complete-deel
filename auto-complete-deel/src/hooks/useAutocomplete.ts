import { useEffect,  useState, useMemo} from "react";
import { useDebounce } from "./useDebounce";
import type { Country, UseAutocompleteProps } from "../types";

export const useAutocomplete = ({onInputChange, onSelectedOption, options, isLoading}: UseAutocompleteProps) => {
    const [value, setValue] = useState<string>('');
    const [shouldUpdate, setShouldUpdate] = useState<boolean>(false);
    const searchTerm = useDebounce({value, delay: 300});

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
        setShouldUpdate(true);
        setValue(e.target.value);
      };
    
      const onOptionClickHandler = (option: Country) => {
        setShouldUpdate(false);
        setValue(option.label);
        onSelectedOption(option);
      };

      const showOptions = useMemo(() => {
        return options.length > 0 && !isLoading;
      }
      , [options, isLoading]);
    return {value, setShouldUpdate, showOptions, setValue, searchTerm, onInputChangeHandler, onOptionClickHandler};
};