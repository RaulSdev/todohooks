import { useState } from "react";

export default function useToggle(initialVal = false) {
  //call useState, 'reserve piece of state'
  const [state, setstate] = useState(initialVal);
  const toggle = () => {
    setstate(!state);
  };
  //return piece of state AND a function to toggle it
  return [state, toggle];
}
