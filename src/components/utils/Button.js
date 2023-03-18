import React from "react";
import "../styles/utils.css";

function Button({ text, handleButtonClick }) {
  return <button onClick={() => handleButtonClick()}> {text} </button>;
}

export default Button;
