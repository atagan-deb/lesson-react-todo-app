import React from 'react'

export const CompleteList = (props) => {
  const {
    completeTodos,
    setCompleteTodos,
    incompleteTodos,
    setIncompleteTodos
  } = props;
  const onClickReturn = (e) => {
    const returnTodo = e.target.value;
    setIncompleteTodos([...incompleteTodos, returnTodo]);
    setCompleteTodos(completeTodos.filter((todo) => todo !== returnTodo));
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
                <button value={todo} onClick={onClickReturn}>
                  戻す
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
