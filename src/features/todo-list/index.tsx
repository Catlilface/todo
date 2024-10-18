import { useList } from "effector-react";
import { getTodos } from "../../store";
import TodoItem from "../todo-item";
import { ITodoList } from "./types";

export default function TodoList({ mode, onCheckTodo }: ITodoList) {
  return (
    <div className="w-full h-80 overflow-y-auto p-2">
      {useList(getTodos(mode), {
        fn: (todo) => (
          <TodoItem key={todo.id} onCheckTodo={onCheckTodo} {...todo} />
        ),
        placeholder: <div className="text-center">Увы, тут ничего :(</div>,
      })}
    </div>
  );
}
