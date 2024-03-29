import { InputProps } from "./types";

import style from "./inp.module.css";
import { ChangeEvent, useEffect, useState } from "react";

function Input(props: InputProps) {
  const [value, updateValue] = useState("");
  const [label, updateLabel] = useState("");
  const [error, updateError] = useState(false);
  const [errorText, updateErrorText] = useState("");

  useEffect(() => updateValue(props.value || ""), [props.value]);
  useEffect(() => updateLabel(props.label || ""), [props.label]);
  useEffect(() => updateError(props.error || false), [props.error]);
  useEffect(() => updateErrorText(props.errorText || ""), [props.errorText]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    } else {
      updateValue(e.target.value);
    }
  };

  const className = `${props.className || ""} ${style["input-control"]} ${
    error ? style["input-control-error"] : ""
  }`;
  const placeholder = props.placeholder || "Enter Text Here...";

  return (
    <>
      {label ? <label className={style.label}>{label}</label> : null}
      <input
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        style={{
          ...(props.style || {}),
          marginTop: props.label ? "0.5rem" : 0,
        }}
      />
      {errorText ? (
        <div className={style["input-error-text"]}>{errorText}</div>
      ) : null}
    </>
  );
}

export default Input;
