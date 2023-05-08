import { useSetAtom } from "jotai";
import * as React from "react";
import { counterAtom } from "./services/counter/atom";

type Props = {
  onClick: () => void;
  mode: "reset" | "increase" | "decrease";
  label: string;
};

export const Button: React.FC<Props>  = (props) => {
  const setCounterAtom = useSetAtom(counterAtom);

  const handleClick = () => {
    switch(props.mode){
      case "reset":
        setCounterAtom(0);
        break;
      case "decrease":
        setCounterAtom((i) => i-1);
        break;
      default:
        setCounterAtom((i) => i+1);
        break;
    }
    props.onClick();
  }

  return (
    <button className="border border-white rounded-lg text-white" onClick={handleClick}>{props.label}</button>
  );
};
