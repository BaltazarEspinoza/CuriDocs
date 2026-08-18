import { spawnSync } from "node:child_process";

const minimumNode = [24, 12, 0];

function parseVersion(value) {
  return value
    .replace(/^v/, "")
    .split(".")
    .slice(0, 3)
    .map((part) => Number.parseInt(part, 10));
}

function isAtLeast(current, minimum) {
  return current.some((value, index) => {
    if (value === minimum[index]) return false;
    return (
      value > minimum[index] && current.slice(0, index).every((part, i) => part === minimum[i])
    );
  });
}

function commandVersion(command, args = ["--version"]) {
  const isWindows = process.platform === "win32";
  const executable = isWindows ? (process.env.ComSpec ?? "cmd.exe") : command;
  const commandArgs = isWindows ? ["/d", "/s", "/c", [command, ...args].join(" ")] : args;
  const result = spawnSync(executable, commandArgs, {
    encoding: "utf8",
    windowsHide: true,
  });
  return result.status === 0 ? result.stdout.trim() : null;
}

const nodeVersion = parseVersion(process.version);
const pnpmVersion = commandVersion("pnpm");
const dockerVersion = commandVersion("docker");

console.log("CuriDocs - diagnóstico del entorno\n");
console.log(`Node.js: ${process.version}`);
console.log(`pnpm: ${pnpmVersion ?? "no encontrado"}`);
console.log(`Docker: ${dockerVersion ?? "no encontrado (opcional para iniciar PostgreSQL)"}`);

let failed = false;

if (!isAtLeast(nodeVersion, minimumNode) && nodeVersion.join(".") !== minimumNode.join(".")) {
  console.error("\nError: se requiere Node.js 24.12.0 o superior.");
  failed = true;
}

if (!pnpmVersion) {
  console.error("\nError: pnpm no está disponible. Ejecuta `corepack enable` y vuelve a intentar.");
  failed = true;
}

if (!failed) {
  console.log("\nEl entorno mínimo está listo.");
}

process.exitCode = failed ? 1 : 0;
