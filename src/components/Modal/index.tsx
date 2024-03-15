import { ModalProps } from "./types";

import style from "./modal.module.css";
import { useEffect, useState } from "react";

function Modal(props: ModalProps) {
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    if (props.isOpen) {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  }, [props.isOpen]);

  return (
    <div className={style.modal} style={{ display }}>
      <div className={style["modal-content"]}>
        <span className={style["close"]} onClick={props.onClose}>
          &times;
        </span>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
