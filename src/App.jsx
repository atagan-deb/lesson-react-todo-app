/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import "./styles.css";

import { InputTodo } from "./components/InputTodo";
import { IncompleteList } from "./components/IncompleteList";
import { CompleteList } from "./components/CompleteList";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [isMax, setIsMax] = useState(false);
  useEffect(() => {
    if (incompleteTodos.length === 5) {
      isMax || setIsMax(true);
    } else {
      !isMax || setIsMax(false);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [incompleteTodos]);
  return (
    <>
      <InputTodo
        incompleteTodos={incompleteTodos}
        setIncompleteTodos={setIncompleteTodos}
        isMax={isMax}
      />
      {isMax && (
        <p style={{ color: "red", textAlign: "center" }}>
          TODO数が上限に達したよ！消化しなさい！
        </p>
      )}
      <IncompleteList
        incompleteTodos={incompleteTodos}
        setIncompleteTodos={setIncompleteTodos}
        completeTodos={completeTodos}
        setCompleteTodos={setCompleteTodos}
      />
      <CompleteList
        completeTodos={completeTodos}
        setCompleteTodos={setCompleteTodos}
        incompleteTodos={incompleteTodos}
        setIncompleteTodos={setIncompleteTodos}
      />
    </>
  );
};
