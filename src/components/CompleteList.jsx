import React from "react";

export const CompleteList = (props) => {
  const {
    completeTodos,
    setCompleteTodos,
    incompleteTodos,
    setIncompleteTodos
  } = props;
  const onClickReturn = (props) => {
    const { index } = props;
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setIncompleteTodos([...incompleteTodos, completeTodos[index]]);
    setCompleteTodos(newCompleteTodos);
  };
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo + index}>
              <div className="list-row">
                <p className="list-text">{todo}</p>
                <button onClick={() => onClickReturn({ index })}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
