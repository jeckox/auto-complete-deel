import React, { useEffect } from 'react';
import { useDebounce } from '../hooks';
import type { AutocompleteProps } from '../types';

export const Autocomplete = ({options, isLoading, onInputChange} : AutocompleteProps) => {
  const [value, setValue] = React.useState<string>('');
  const val = useDebounce(value, 300);

  useEffect(() => {
    onInputChange(val);
  }, [val, onInputChange]);

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };


  return (
    <div>
      <input type="text" onChange={onInputChangeHandler} value={value}/>
      {!isLoading && <div>
        <ul>
          {options.map(option => (
            <li key={option.code}>{option.label} - {option.phone}</li>
          ))}
        </ul>
      </div>}

    </div>
  );
};