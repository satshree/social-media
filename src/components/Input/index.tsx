import { InputProps } from "./types";

import style from "./inp.module.css";
import { ChangeEvent, useEffect, useState } from "react";

function Input(props: InputProps) {
  const [value, updateValue] = useState("");

  useEffect(() => updateValue(props.value || ""), [props.value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    } else {
      updateValue(e.target.value);
    }
  };

  const className = `${props.className || ""} ${style["input-control"]} ${
    props.error ? style["input-control-error"] : ""
  }`;
  const placeholder = props.placeholder || "Enter Text Here...";

  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {props.errorText ? (
        <div className={style["input-error-text"]}>{props.errorText}</div>
      ) : null}
    </>
  );
}

export default Input;
