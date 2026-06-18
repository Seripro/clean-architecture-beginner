import { expect, test } from "vitest";
import { isActive, calcScore } from "../domain/User.js";

test("投稿が2回以上ならアクティブと判定される", () => {
  expect(isActive(2)).toBe(true);
  expect(isActive(5)).toBe(true);
});

test("投稿が1回以下ならアクティブではないと判定される", () => {
  expect(isActive(1)).toBe(false);
  expect(isActive(0)).toBe(false);
});
