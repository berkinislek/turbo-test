import { useAtomValue } from "jotai";
import * as React from "react";
import { counterAtom } from "./services/counter/atom";

export const CounterFromUi: React.FC = () => {
  const counter = useAtomValue(counterAtom);

  return (
    <div className="w-full text-lg text-white">{"Shared Counter Component Using Shared Counter Atom: " + counter}</div>
  );
};
