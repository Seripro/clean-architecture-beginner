import { isActive } from "../domain/User.js";
import type { User } from "../domain/User.js";
import type { PostPort } from "./port/PostPort.js";
import type { UserPort } from "./port/UserPort.js";

export class ActiveUserUseCase {
  constructor(
    private readonly userPort: UserPort,
    private readonly postPort: PostPort,
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.userPort.getUsers();
    const posts = await this.postPort.getPosts();

    return users.filter((user) => {
      // ユーザーごとの投稿数を集計するのはUseCaseの責務
      const postCount = posts.filter((post) => post.userId === user.id).length;
      // 「アクティブかどうか」の判定はUserドメインのビジネスルールに委ねる
      return isActive(postCount);
    });
  }
}
