import React, { useState } from "react";
import "./styles.css";

import { InputTodo } from "./components/InputTodo";
import { IncompleteList } from "./components/IncompleteList";
import { CompleteList } from "./components/CompleteList";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  return (
    <>
      <InputTodo
        incompleteTodos={incompleteTodos}
        setIncompleteTodos={setIncompleteTodos}
      />
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
