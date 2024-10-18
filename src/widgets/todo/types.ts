export interface ITodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export default interface ITodo {
  todos: ITodoItem[];
}

export enum TodoMode {
  ALL = "all",
  COMPLETED = "completed",
  ACTIVE = "active",
}
