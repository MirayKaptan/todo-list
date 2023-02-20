import CheckedBox from "@/assets/CheckedBox";
import DotIcon from "@/assets/DotIcon";
import Checkbox from "@/assets/CheckBox";
import { ToDo } from "@/types/index";
import React from "react";
import { useMainPageContext, useModalsContext } from "@/context/context";

type Props = {
  todo: ToDo;
};

const Task = (props: Props) => {
  const { todo } = props;

  const { setTodoMenuModal, setSelectedTodo } = useModalsContext();
  const { completeTodo } = useMainPageContext();

  return (
    <>
      <div className="flex my-6 items-center">
        <a onClick={() => completeTodo(todo.id)}>
          {todo?.completed ? <CheckedBox /> : <Checkbox />}
        </a>
        <p className="mx-4 h-5 not-italic font-normal text-base leading-5 text-black">
          {todo?.description}
        </p>
        <a
          onClick={() => {
            setTodoMenuModal(true);
            setSelectedTodo(todo);
          }}
          className="absolute right-4"
        >
          <DotIcon />
        </a>
      </div>
    </>
  );
};

export default Task;
