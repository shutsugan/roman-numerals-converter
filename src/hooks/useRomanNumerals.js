export const useRomanNumerals = () => {
  const numeralsMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  const fromRoman = (value) => {
    const romanChars = value.split("");

    let total = 0;

    romanChars.forEach((char, index, chars) => {
      const currentValue = numeralsMap[char];
      const nextValue = numeralsMap[chars[index + 1]];

      if (currentValue <= nextValue) total -= currentValue;
      else total += currentValue;
    });

    return total;
  };

  const toRoman = (value) => {
    if (value === 0) return "";

    const keys = Object.keys(numeralsMap);
    const values = Object.values(numeralsMap);
    const len = keys.length;

    for (let i = 0; i < len; i++) {
      if (value >= values[i]) return keys[i] + toRoman(value - values[i]);
    }
  };

  return { fromRoman, toRoman };
};

export default useRomanNumerals;
