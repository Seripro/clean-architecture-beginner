import { JsonPlaceholderDriver } from "./driver/jsonPlaceholder.js";
import { UserGateway } from "./gateway/userGateway.js";
import { PostGateway } from "./gateway/postGateway.js";
import { ActiveUserUseCase } from "./usecase/ActiveUserUsecase.js";

const driver = new JsonPlaceholderDriver();
const userGateway = new UserGateway(driver);
const postGateway = new PostGateway(driver);
export const activeUserUseCase = new ActiveUserUseCase(
  userGateway,
  postGateway,
);
