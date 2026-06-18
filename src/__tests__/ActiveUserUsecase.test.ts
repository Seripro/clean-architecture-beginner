import { expect, test } from "vitest";
import { ActiveUserUseCase } from "../usecase/ActiveUserUsecase.js";
import type { UserPort } from "../usecase/port/UserPort.js";
import type { PostPort } from "../usecase/port/PostPort.js";

test("投稿を2回以上しているユーザーがアクティブユーザーとして返る", async () => {
  const mockUserPort: UserPort = {
    getUsers: async () => [
      { id: 1, name: "渡辺" },
      { id: 2, name: "山田" },
    ],
  };

  const mockPostPort: PostPort = {
    getPosts: async () => [
      { id: 101, userId: 1, title: "日報1" },
      { id: 102, userId: 1, title: "日報2" },
      { id: 103, userId: 2, title: "日報1" },
    ],
  };

  const useCase = new ActiveUserUseCase(mockUserPort, mockPostPort);

  const expected = [{ id: 1, name: "渡辺", score: 20 }];

  const actual = await useCase.execute();
  expect(actual).toEqual(expected);
});
