import { TodoMode } from "../../widgets/todo/types";

export interface ITodoControls {
  onChange: CallableFunction;
  mode: TodoMode;
}
