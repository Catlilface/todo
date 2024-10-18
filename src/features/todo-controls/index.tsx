import { TodoMode } from "../../widgets/todo/types";
import { ITodoControls } from "./types";

export default function TodoControls({ onChange, mode }: ITodoControls) {
  return (
    <div className="flex gap-2 px-4 py-3 border-t-2 border-zinc-800">
      <button
        className={`${mode === TodoMode.ALL ? "" : "opacity-50"}`}
        onClick={() => onChange(TodoMode.ALL)}
      >
        Все
      </button>
      <button
        className={`${mode === TodoMode.ACTIVE ? "" : "opacity-50"}`}
        onClick={() => onChange(TodoMode.ACTIVE)}
      >
        Активные
      </button>
      <button
        className={`${mode === TodoMode.COMPLETED ? "" : "opacity-50"}`}
        onClick={() => onChange(TodoMode.COMPLETED)}
      >
        Выполненные
      </button>
    </div>
  );
}
