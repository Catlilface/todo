import Input from "../../features/input";
import { checkTodoFn, createTodoFn } from "../../store";
import { useUnit } from "effector-react";
import { TodoMode } from "./types";
import { useState } from "react";
import { TodoControls, TodoList } from "../../features";

export default function Todo() {
  const createTodo = useUnit(createTodoFn);
  const checkTodo = useUnit(checkTodoFn);
  const [mode, setMode] = useState<TodoMode>(TodoMode.ALL);

  return (
    <div className="bg-zinc-900 rounded-3xl woww-so-modern w-full max-w-[400px] mt-8">
      <Input
        className="py-3 rounded-md w-full bg-transparent focus-visible:outline-none text-center border-b-2 border-zinc-800"
        onEnter={createTodo}
        placeholder="Хмм, сегодня мне надо..."
      />
      <TodoList mode={mode} onCheckTodo={checkTodo} />
      <TodoControls mode={mode} onChange={setMode} />
    </div>
  );
}
