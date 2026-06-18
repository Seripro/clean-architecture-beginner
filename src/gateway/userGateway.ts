import type { UserPort } from "../usecase/port/UserPort.js";
import type { User } from "../domain/User.js";
import type { JsonPlaceholderDriver } from "../driver/jsonPlaceholder.js";

export class UserGateway implements UserPort {
  constructor(private readonly driver: JsonPlaceholderDriver) {}

  async getUsers(): Promise<User[]> {
    const users = await this.driver.getUsers();
    return users.map((user) => ({
      id: user.id,
      name: user.name,
    }));
  }
}
