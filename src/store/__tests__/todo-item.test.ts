import { describe, expect, test } from "vitest";
import { ITodoItem } from "../../widgets/todo/types";
import { allSettled, fork } from "effector";
import { $todos, checkTodoFn, createTodoFn } from "..";

const todoMock: ITodoItem[] = [
  {
    id: "2",
    title: "test",
    completed: false,
  },
  {
    id: "3",
    title: "test2",
    completed: true,
  },
];

describe("Взаимодействие с todo", async () => {
  const scope = fork({
    values: [[$todos, todoMock]],
  });

  test("Создание todo", async () => {
    await allSettled(createTodoFn, {
      scope,
      params: "test3",
    });

    expect(scope.getState($todos)).toContainEqual({
      id: "1",
      title: "test3",
      completed: false,
    });
  });

  test("Отметка todo", async () => {
    await allSettled(checkTodoFn, {
      scope,
      params: "1",
    });

    expect(scope.getState($todos)).toContainEqual({
      id: "1",
      title: "test3",
      completed: true,
    });
  });
});
