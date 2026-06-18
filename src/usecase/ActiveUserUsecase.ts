import type { User } from "../domain/User.js";
import type { PostPort } from "./port/PostPort.js";
import type { UserPort } from "./port/UserPort.js";

export class ActiveUserUseCase {
  // カセットの差込口（DI）を用意する
  constructor(
    private readonly userPort: UserPort,
    private readonly postPort: PostPort,
  ) {}

  // 戻り値は「アクティブと判定された User のリスト」とする
  async execute(): Promise<User[]> {
    // まだ実装しない（TDDでテストを先に書くため、とりあえず空配列を返す）
    return [];
  }
}
