import React from "react";
import "./styles/todoform.css";
import Input from "./utils/Input";
import Button from "./utils/Button";

function TodoForm({ addTask }) {
  function handleButtonClick() {
    const taskInput = document.querySelector("#newTaskInput").value;
    addTask(taskInput);
  }

  return (
    <div className="todo-form">
      <div className="inputs">
        <Input id={"newTaskInput"} placeholder={"Nome"}></Input>
      </div>
      <div className="button">
        <Button handleButtonClick={handleButtonClick} text={"+"}></Button>
      </div>
    </div>
  );
}

export default TodoForm;
