import React from "react";
import "./styles.css";

import { IButtonProps } from "./Button.types";

export const Button = ({ variant, children, onClick }: IButtonProps) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
