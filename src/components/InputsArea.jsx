import react, { useState } from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        onKeyDown={props.onKeyDown}
      ></input>
      <button onClick={props.onClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
