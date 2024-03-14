import { ChangeEvent, useEffect, useState } from "react";
import { TextareaProps } from "./types";

import style from "./text.module.css";

function Textarea(props: TextareaProps) {
  const [value, updateValue] = useState("");
  const [label, updateLabel] = useState("");
  const [error, updateError] = useState(false);
  const [errorText, updateErrorText] = useState("");

  useEffect(() => updateValue(props.value || ""), [props.value]);
  useEffect(() => updateLabel(props.label || ""), [props.label]);
  useEffect(() => updateError(props.error || false), [props.error]);
  useEffect(() => updateErrorText(props.errorText || ""), [props.errorText]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    } else {
      updateValue(e.target.value);
    }
  };

  const className = `${props.className || ""} ${style["textarea"]} ${
    error ? style["textarea-error"] : ""
  }`;
  const placeholder = props.placeholder || "Enter Text Here...";

  return (
    <>
      {label ? <label className={style.label}>{label}</label> : null}
      <textarea
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
        rows={props.rows || 5}
        style={{
          ...(props.style || {}),
          marginTop: props.label ? "0.5rem" : 0,
        }}
      >
        {value}
      </textarea>
      {errorText ? (
        <div className={style["textarea-error-text"]}>{errorText}</div>
      ) : null}
    </>
  );
}

export default Textarea;
