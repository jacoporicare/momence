import { ChangeEvent, useState } from 'react';

const allowedCharacters = /^[0-9 ,.]*$/;

export default function useNumericInputState() {
  const [value, setValue] = useState('');
  const [parsedValue, setParsedValue] = useState(NaN);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value;

    if (!allowedCharacters.test(newValue)) {
      return;
    }

    setValue(newValue);
    setParsedValue(parseFloat(newValue.replace(/[, ]/g, '')));
  }

  function onBlur() {
    setValue(
      Number.isNaN(parsedValue) ? '' : parsedValue.toLocaleString('en-US')
    );
  }

  return { value, parsedValue, onChange, onBlur };
}
