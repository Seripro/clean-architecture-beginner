import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/ping", (c) => {
  return c.text("pong");
});

app.get("/active", (c) => {
  // まだUseCaseを作っていないので、いったん「理想のゴール」のJSONを固定値で返しておく
  return c.json([
    {
      userId: 1,
      name: "渡辺",
    },
    {
      userId: 2,
      name: "山田",
    },
  ]);
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
