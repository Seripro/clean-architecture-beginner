import type { Post } from "../domain/Post.js";
import type { JsonPlaceholderDriver } from "../driver/jsonPlaceholder.js";
import type { PostPort } from "../usecase/port/PostPort.js";

export class PostGateway implements PostPort {
  constructor(private readonly driver: JsonPlaceholderDriver) {}

  async getPosts(): Promise<Post[]> {
    const posts = await this.driver.getPosts();
    return posts.map((post) => ({
      id: post.id,
      userId: post.userId,
      title: post.title,
    }));
  }
}
