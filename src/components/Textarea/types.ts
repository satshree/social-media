import { BasicProps } from "../../types";

export type TextareaProps = BasicProps & {
  value?: string;
  label?: string;
  rows?: number | 5;
  placeholder?: string;
  onChange?: (value: string) => void;
  error?: true | false;
  errorText?: string;
};
