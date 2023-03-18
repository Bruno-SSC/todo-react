import React from "react";
import "../styles/utils.css";

function Input(props) {
  return <input className={props.className || ""} id={props.id} defaultValue={props.value || ""} placeholder={props.placeholder}></input>;
}

export default Input;
