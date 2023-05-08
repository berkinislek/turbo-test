import { useAtomValue } from "jotai";
import * as React from "react";
import { counterAtom } from "ui";

export const Counter: React.FC = () => {
  const counter = useAtomValue(counterAtom);

  return (
    <div className="w-1/2 text-lg text-white w-full">{"Local Counter Component Using Shared Counter Atom: " + counter}</div>
  );
};