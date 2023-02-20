import React, { createContext, useState } from "react";

export const ModalsContext = createContext();

export const ModalsContextProvider = ({ children }) => {
  const [addTodoModals, setAddTodoModals] = useState(false);
  const [todoMenuModals, setTodoMenuModals] = useState(false);
  const [updateTodoModals, setUpdateTodoModals] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});

  const value = {
    addTodoModals,
    todoMenuModals,
    updateTodoModals,
    selectedTodo,
    setAddTodoModals,
    setTodoMenuModals,
    setUpdateTodoModals,
    setSelectedTodo,
  };

  return (
    <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>
  );
};
