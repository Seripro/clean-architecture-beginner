import type { User } from "../../domain/User.js";

export interface UserPort {
  getUsers(): Promise<User[]>;
}
