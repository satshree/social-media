import { BasicProps } from "../../types";

export type ModalProps = BasicProps & {
  isOpen: true | false;
  onClose: () => void;
};
