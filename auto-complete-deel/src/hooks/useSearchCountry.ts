
import React, { useCallback } from 'react';
import type { Country } from '../types';
import { getSuggestions } from '../api';


export const useSearchCountry = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<Array<Country>>([]);

  const [selectedOption, setSelectedOption] = React.useState<Country | null>(null);

  const onInputChange = useCallback( async (searchTerm: string) => {
    setIsLoading(true);
    const data = await getSuggestions(searchTerm);
    setOptions(data);
    setIsLoading(false);
  }
  , []);

  const onSelectOptionHandler = (option: Country | null ) => {
    setSelectedOption(option);
    setOptions([]);
  };

  return {isLoading, options, selectedOption, onInputChange, onSelectOptionHandler};
};