import React from "react";
export const IncompleteList = (props) => {
  const {
    incompleteTodos,
    setIncompleteTodos,
    completeTodos,
    setCompleteTodos
  } = props;

  const onClickComplete = (e) => {
    const completeTodo = e.target.value;
    setCompleteTodos([...completeTodos, completeTodo]);
    setIncompleteTodos(incompleteTodos.filter((todo) => todo !== completeTodo));
  };
  const onClickDelete = (e) => {
    const deleteTodo = e.target.value;
    setIncompleteTodos(incompleteTodos.filter((todo) => todo !== deleteTodo));
  };
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo + index}>
              <div className="list-row">
                <p className="list-text">{todo}</p>
                <button value={todo} index={index} onClick={onClickComplete}>
                  完了
                </button>
                <button value={todo} onClick={onClickDelete}>
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
