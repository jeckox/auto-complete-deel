import React from "react";
import type { SelectedOptionProps } from "../types";

export const SelectedOption = ({selectedOption}: SelectedOptionProps ) => {
    const {code, label, phone} = selectedOption;
    const flag = `https://flagcdn.com/w20/${code.toLowerCase()}.png`;
    return (
        <div>
            Selected Option: <img src={flag} alt={label} />
            <span>+{phone} {label}</span>
        </div>
    );
  };