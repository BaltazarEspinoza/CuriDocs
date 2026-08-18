import assert from "node:assert/strict";
import { after, test } from "node:test";

import { buildApp } from "./app.ts";

process.env.NODE_ENV = "test";

const app = buildApp();

after(async () => {
  await app.close();
});

test("GET /health informa que la API está disponible", async () => {
  const response = await app.inject({
    method: "GET",
    url: "/health",
  });

  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.json(), {
    service: "api",
    status: "ok",
  });
});
