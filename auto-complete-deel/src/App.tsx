import React, { useCallback } from 'react';
import { Autocomplete } from './components';
import './App.css';
import { Country } from './types';
import { getSuggestions } from './api';

function App() {

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

  return (
    <div className="App">
      <header className="App-header">
        {selectedOption && <div>Selected Option: <img src={`https://flagcdn.com/w20/${selectedOption.code.toLowerCase()}.png`} alt={selectedOption?.label} />  +{selectedOption?.phone} {selectedOption?.label}</div>}
        <Autocomplete
          isLoading={isLoading}
          options={options}
          onInputChange={onInputChange}
          onSelectedOption={onSelectOptionHandler}
          placeholder='Search for a country...'
        />
      </header>
    </div>
  );
}

export default App;
