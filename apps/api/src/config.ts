const DEFAULT_PORT = 3001;

function readPort(value: string | undefined) {
  if (value === undefined) return DEFAULT_PORT;

  const port = Number(value);

  if (!Number.isInteger(port) || port < 1 || port > 65_535) {
    throw new Error("API_PORT debe ser un número entero entre 1 y 65535.");
  }

  return port;
}

export const config = Object.freeze({
  host: process.env.API_HOST ?? "127.0.0.1",
  port: readPort(process.env.API_PORT),
});
