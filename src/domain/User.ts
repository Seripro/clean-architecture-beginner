export type User = {
  id: number;
  name: string;
};

// 投稿数を受け取ってアクティブかどうかを判定するビジネスルール
export function isActive(postCount: number): boolean {
  return postCount >= 2;
}

// 投稿数を受け取って活動スコアを計算するビジネスルール
export function calcScore(postCount: number): number {
  return postCount * 10;
}
