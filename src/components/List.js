import React from "react";
import "./styles/list.css";
import Task from "./Task";

function List(props) {
  return (
    <div className="task-list">
      <ul>
        {
          //* Begin
          props.taskList.map((t) => {
            return <Task handles={props.handles} key={t.id} item={t}></Task>;
          })
          //* end
        }
      </ul>
    </div>
  );
}

export default List;
