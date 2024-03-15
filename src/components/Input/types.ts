import { BasicProps } from "../../types";

export type InputProps = BasicProps & {
  label?: string;
  value?: string;
  disabled?: true | false;
  placeholder?: string;
  onChange?: (value: string) => void;
  error?: true | false;
  errorText?: string;
};
