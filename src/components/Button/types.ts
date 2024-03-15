import { BasicProps } from "../../types";

export interface ButtonInterface {
  type?: "submit" | "reset" | "button";
  variant?: "primary" | "secondary" | "success" | "danger";
  ghost?: true | false;
  disabled?: true | false;
}

export type ButtonProps = BasicProps &
  ButtonInterface & {
    onClick?: () => void;
  };
