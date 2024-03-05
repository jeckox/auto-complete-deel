import React from 'react';
import { Autocomplete, SelectedOption } from './components';
import './App.css';
import { useSearchCountry } from './hooks';

function App() {

  const {isLoading, options, selectedOption, onInputChange, onSelectOptionHandler} = useSearchCountry();

  return (
    <div className="App">
      <header className="App-header">
        { selectedOption && <SelectedOption selectedOption={selectedOption} /> }
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
