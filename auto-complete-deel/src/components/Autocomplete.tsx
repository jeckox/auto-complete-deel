import React from 'react';
import { useAutocomplete } from '../hooks';
import type { AutocompleteProps } from '../types';
import { HighlightText } from './HighlightText';
import './../styles/Autocomplete.css';

export const Autocomplete = ({options, isLoading, onInputChange, onSelectedOption, placeholder} : AutocompleteProps) => {
  const {
    value,
    searchTerm,
    onInputChangeHandler,
    onOptionClickHandler,
    showOptions,
    ref,
    onFocusHandler
  } = useAutocomplete({onInputChange, onSelectedOption, isLoading, options});

  
  return (
    <div ref={ref} className='Autocomplete-container'>
      <input onFocus={onFocusHandler} className='Autocomplete-input' type="text" onChange={onInputChangeHandler} value={value} placeholder={placeholder} />
      {showOptions && <div className='Autocomplete-listContainer'>
        <ul className='Autocomplete-list' >
          {options.map(option => (
            <li tabIndex={0} className='Autocomplete-listItem' onClick={() => onOptionClickHandler(option)} key={option.code}>+{option.phone} ({option.code}) <HighlightText text={option.label} highlight={searchTerm} /> </li>
          ))}
        </ul>
      </div>}
    </div>
  );
};