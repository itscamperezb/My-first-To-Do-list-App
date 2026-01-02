import React, { useState } from "react";

function ToDoList(props) {
  return (
    <li
      key={props.todoItem}
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.todoItem}
    </li>
  );
}
export default ToDoList;
