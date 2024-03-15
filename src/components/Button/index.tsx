import { ButtonProps, ButtonInterface } from "./types";

import style from "./btn.module.css";
import { ReactNode, useEffect, useState } from "react";

function Button(props: ButtonProps) {
  const [children, updateChildren] = useState<ReactNode>(<></>);

  useEffect(() => updateChildren(props.children), [props.children]);

  const handleClick = () => {
    if (props.onClick) props.onClick();
  };

  const btnProps: ButtonInterface = {
    type: props.type || "button",
    variant: props.variant || "primary",
    disabled: props.disabled || false,
  };

  const className = `${props.className || ""} ${style.btn} ${
    props.ghost
      ? style[`btn-${btnProps.variant}-outline`]
      : style[`btn-${btnProps.variant}`]
  } ${props.disabled ? style[`btn-${btnProps.variant}-disabled`] : ""}`;

  return (
    <button
      className={className}
      {...btnProps}
      style={{ ...(props.style || {}) }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
