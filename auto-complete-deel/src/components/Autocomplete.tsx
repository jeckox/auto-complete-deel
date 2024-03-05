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
    showOptions
  } = useAutocomplete({onInputChange, onSelectedOption, isLoading, options});
  return (
    <div className='Autocomplete-container'>
      <input className='Autocomplete-input' type="text" onChange={onInputChangeHandler} value={value} placeholder={placeholder} />
      {showOptions && <div className='Autocomplete-listContainer'>
        <ul className='Autocomplete-list'>
          {options.map(option => (
            <li className='Autocomplete-listItem' onClick={() => onOptionClickHandler(option)} key={option.code}>+{option.phone} ({option.code}) <HighlightText text={option.label} highlight={searchTerm} /> </li>
          ))}
        </ul>
      </div>}
    </div>
  );
};