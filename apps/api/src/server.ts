import { buildApp } from "./app.ts";
import { config } from "./config.ts";

const app = buildApp();

try {
  await app.listen({
    host: config.host,
    port: config.port,
  });
} catch (error) {
  app.log.error(error);
  process.exitCode = 1;
}
