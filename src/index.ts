import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { activeUserUseCase } from "./container.js";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/ping", (c) => {
  return c.text("pong");
});

app.get("/active", async (c) => {
  const activeUsers = await activeUserUseCase.execute();
  return c.json(
    activeUsers.map((user) => ({
      userId: user.id,
      name: user.name,
      score: user.score,
    })),
  );
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
