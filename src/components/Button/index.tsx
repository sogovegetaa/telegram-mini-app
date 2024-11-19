import React, { FC } from "react";
import { ArrowIcon } from "../Icons/ArrowIcon";
import "./style.scss";

type Props = {
  text: string;
  onClick: () => void;
};

const Button: FC<Props> = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <ArrowIcon />
      {text}
    </button>
  );
};

export default Button;
