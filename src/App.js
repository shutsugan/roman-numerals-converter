import React, { useState } from "react";

import useRomanNumerals from "./hooks/useRomanNumerals";

import "./App.css";

const App = () => {
  const [romanNums, setRomanNums] = useState("");
  const [intNums, setIntNums] = useState("");

  const { fromRoman, toRoman } = useRomanNumerals();

  const handleRomanNumerals = ({ target }) => {
    const romanValue = target.value;
    const int = fromRoman(romanValue);

    setRomanNums(romanValue);
    setIntNums(!isNaN(int) ? parseInt(int) : 0);
  };

  const handleIntNumbers = ({ target }) => {
    const intValue = target.value;
    const num = toRoman(intValue);

    setIntNums(intValue);
    setRomanNums(num);
  };

  return (
    <div className="app flex flex-col flex-center">
      <label className="app-label" htmlFor="app-input">
        Convert from and to Roman numeral
      </label>
      <input
        className="app-input"
        type="text"
        value={romanNums}
        onChange={handleRomanNumerals}
        placeholder="Roman numerals goes here..."
      />
      <input
        className="app-input"
        type="number"
        value={intNums}
        onChange={handleIntNumbers}
        placeholder="Integer numbers goes here..."
      />
    </div>
  );
};

export default App;
