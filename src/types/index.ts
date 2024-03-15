import { PropsWithChildren } from "react";

export type BasicProps = PropsWithChildren & {
  className?: string;
  style?: object;
};
