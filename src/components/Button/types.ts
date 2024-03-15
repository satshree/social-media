import { BasicProps } from "../../types";

export interface ButtonInterface {
  type?: "submit" | "reset" | "button";
  variant?: "primary" | "secondary" | "success" | "danger";
  disabled?: true | false;
}

export type ButtonProps = BasicProps &
  ButtonInterface & {
    ghost?: true | false;
    onClick?: () => void;
  };
