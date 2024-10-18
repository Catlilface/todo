import { ITodoItemFeature } from "./types";

export default function TodoItem({
  id,
  title,
  completed,
  onCheckTodo,
}: ITodoItemFeature) {
  return (
    <div className="w-full">
      <label
        className="cursor-pointer flex justify-between hover:bg-zinc-800 px-4 p-2 rounded-lg active:scale-95 transition-all duration-75 select-none"
        htmlFor={id}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onCheckTodo(id)}
          id={id}
          className="hidden"
        />
        <div className={`${completed ? "line-through opacity-50" : ""}`}>
          {title}
        </div>
        <div className="opacity-50">{id}</div>
      </label>
    </div>
  );
}
