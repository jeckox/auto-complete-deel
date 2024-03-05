import React from 'react';
import { useDebounce } from '../hooks';

export const Autocomplete = () => {
  const [value, setValue] = React.useState('');
  const val = useDebounce(value, 300);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  return (
    <div>
      <input type="text" onChange={onInputChange} value={value}/>
      {val !=="" && <div>
        <ul>
          <li>{val}</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>}

    </div>
  );
};