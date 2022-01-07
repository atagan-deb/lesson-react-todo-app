import React, { useState } from "react";

export const InputTodo = (props) => {
  const { incompleteTodos, setIncompleteTodos } = props;
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
    <div className="inputTodo-area">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
