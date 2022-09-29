import { useState } from "react";

export const useInput = (initialVlaue, inputValue) => {
  const [value, setValue] = useState(initialVlaue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
    let willUpdate = true;
    if (typeof inputValue === "function") {
      willUpdate = inputValue(value);
      console.log(willUpdate);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
