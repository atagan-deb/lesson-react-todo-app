import React from "react";
export const IncompleteList = (props) => {
  const {
    incompleteTodos,
    setIncompleteTodos,
    completeTodos,
    setCompleteTodos
  } = props;

  const onClickComplete = (props) => {
    const { index } = props;
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  const onClickDelete = (props) => {
    const { index } = props;
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1);    
    setIncompleteTodos(newTodos);
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
                <button onClick={() => onClickComplete({ index })}>完了</button>
                <button onClick={() => onClickDelete({ index })}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
