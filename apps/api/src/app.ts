import Fastify from "fastify";

import type { HealthResponse } from "@curidocs/contracts";

export function buildApp() {
  const app = Fastify({
    logger: process.env.NODE_ENV !== "test",
  });

  app.get<{ Reply: HealthResponse }>("/health", async () => ({
    service: "api",
    status: "ok",
  }));

  return app;
}
