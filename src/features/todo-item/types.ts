import { ITodoItem } from "../../widgets/todo/types";

export interface ITodoItemFeature extends ITodoItem {
  onCheckTodo: CallableFunction;
}
