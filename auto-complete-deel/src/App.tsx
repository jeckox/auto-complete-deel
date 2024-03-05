import React, { useCallback } from 'react';
import { Autocomplete } from './components';
import './App.css';
import { Country } from './types';
import { getSuggestions } from './api';

function App() {

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<Array<Country>>([]);

  const onInputChange = useCallback( async (searchTerm: string) => {
    setIsLoading(true);
    const data = await getSuggestions(searchTerm);
    setOptions(data);
    setIsLoading(false);
  }
  , []);

  return (
    <div className="App">
      <header className="App-header">
        <Autocomplete isLoading={isLoading} options={options} onInputChange={onInputChange}/>
      </header>
    </div>
  );
}

export default App;
