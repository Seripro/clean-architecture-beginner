import type { Post } from "../../domain/Post.js";

export interface PostPort {
  getPosts(): Promise<Post[]>;
}
