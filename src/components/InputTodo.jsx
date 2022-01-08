import React, { useState } from "react";

const style = {
  backgroundColor: "lightcyan",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { incompleteTodos, setIncompleteTodos, isMax } = props;
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };
  const onClickAdd = () => {
    if (todoText === "") {
      return;
    }
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText("");
  };
  return (
    <div style={style}>
      <input
        placeholder="TODOを入力"
        disabled={isMax}
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button disabled={isMax} onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};
