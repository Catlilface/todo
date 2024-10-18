import { describe, expect, test } from "vitest";
import { TodoMode } from "../../widgets/todo/types";
import { getTodos } from "..";

describe("Фильтрация с todo", async () => {
  for (const mode of Object.values(TodoMode)) {
    test(`Фильтрация с todo ${mode}`, async () => {
      const todos = getTodos(mode);

      expect(todos.defaultState).toMatchSnapshot();
    });
  }
});
