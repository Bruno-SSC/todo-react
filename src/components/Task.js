import React from "react";
import CheckIcon from "./utils/CheckIcon";
import Input from "./utils/Input";

function Task(props) {
  function inputOrName() {
    if (props.item.editing) {
      return (
        <Input
          id={`taskNewName${props.item.id}`}
          handles={props.handles}
          className="editing"
          value={props.item.name}></Input>
      );
    }
    return <span>{props.item.name}</span>;
  }

  return (
    <li>
      {inputOrName()}

      <div className="buttons">
        <CheckIcon props={props}></CheckIcon>

        <img
          onClick={() => {
            props.handles.deleteTask(props.item);
          }}
          src="/assets/bin.png"
          alt="bin icon"></img>

        <img
          onClick={() => {
            props.handles.editTask(props.item);
          }}
          src="/assets/edit.png"
          alt="edit icon"></img>
      </div>
    </li>
  );
}

export default Task;
