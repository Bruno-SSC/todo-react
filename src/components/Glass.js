// * Packages & Style
import React, { useState } from "react";
import "./styles/glass.css";

// * Components
import List from "./List";
import TodoForm from "./TodoForm";

// * Models
import Task from "../model/Task";

//* Functions
import { changeTaskName, openEditMode, switchStatus } from "./scripts";

function Glass() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskName) {
    if (!taskName) {
      return;
    }
    const newTask = new Task({ name: taskName });
    setTasks([...tasks, newTask]);
  }

  function deleteTask(item) {
    const newList = tasks.filter((t) => t.id !== item.id);
    setTasks(newList);
  }

  function editTask(item) {
    if (!item.editing) {
      const replacement = openEditMode(tasks, item);
      setTasks(replacement);
      return;
    }

    const replacement = changeTaskName(tasks, item);
    setTasks(replacement);
  }

  function checkTask(item) {
    const replacement = switchStatus(tasks, item);
    setTasks(replacement);
  }

  const handles = {
    checkTask,
    deleteTask,
    editTask,
  };

  return (
    <div className="background">
      <TodoForm addTask={addTask}></TodoForm>
      <List handles={handles} taskList={tasks}></List>
    </div>
  );
}

export default Glass;
