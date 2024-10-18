import { createEvent, createStore, sample } from "effector";
import { ITodoItem, TodoMode } from "../widgets/todo/types";
import defaultTodos from "./todo-mock.json";
import { uniqueId } from "lodash";

export const $todos = createStore<ITodoItem[]>(defaultTodos);
const $activeTodos = $todos.map((todos) =>
  todos.filter((todo) => !todo.completed),
);
const $completedTodos = $todos.map((todos) =>
  todos.filter((todo) => todo.completed),
);

export const createTodoFn = createEvent<string>();
export const checkTodoFn = createEvent<string>();

$todos.on(checkTodoFn, (state, id) =>
  state.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  ),
);

sample({
  clock: createTodoFn,
  source: $todos,
  filter: (_todos, newTodo) => newTodo.length > 0,
  fn: (todos, newTodo) => [
    { id: uniqueId(), title: newTodo, completed: false },
    ...todos,
  ],
  target: $todos,
});

export const getTodos = (mode: TodoMode) => {
  if (mode === TodoMode.ACTIVE) {
    return $activeTodos;
  }

  if (mode === TodoMode.COMPLETED) {
    return $completedTodos;
  }

  return $todos;
};
