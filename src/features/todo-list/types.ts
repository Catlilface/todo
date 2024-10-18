import { TodoMode } from "../../widgets/todo/types";

export interface ITodoList {
  mode: TodoMode;
  onCheckTodo: CallableFunction;
}
