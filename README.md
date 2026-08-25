# CuriDocs

Base técnica para el proyecto de **Diseño de Software 2026**: un futuro sistema de gestión documental para proyectos de software tradicionales.

> [!IMPORTANT]
> Este repositorio está **preparado, no desarrollado**. No contiene autenticación, CRUD, modelo de datos, generación de PDF, editor, trazabilidad, estadísticas, pagos ni integraciones. Esas funcionalidades deben ser diseñadas e implementadas por el equipo.

## Qué quedó preparado

- Monorepo con pnpm y Turborepo.
- Boceto web navegable con Next.js, React y TypeScript.
- API mínima con Fastify y un único endpoint `GET /health`.
- Paquete compartido para contratos entre aplicaciones.
- PostgreSQL local opcional mediante Docker Compose.
- Formato, lint, comprobación de tipos, prueba mínima y compilación.
- Flujo de integración continua para GitHub Actions.
- Guías de arquitectura, requisitos, roles, contribución y decisiones técnicas.
- Plantillas para issues y pull requests.

## Requisitos

- Node.js 24.12 o superior.
- pnpm 11.19.0.
- Docker Desktop, Podman o equivalente solo si se quiere levantar PostgreSQL localmente.

## Inicio rápido

```powershell
corepack enable
pnpm install
Copy-Item .env.example .env
pnpm doctor
pnpm dev
```

Después de iniciar:

- Boceto de la web: <http://localhost:3000>
- Salud de la web: <http://localhost:3000/api/health>
- Salud de la API: <http://localhost:3001/health>

El boceto y la API no requieren una base de datos. Los indicadores, tareas y alertas que aparecen en
pantalla son demostrativos. Para preparar PostgreSQL:

```powershell
pnpm db:up
pnpm db:logs
```

Detenerlo sin eliminar sus datos:

```powershell
pnpm db:down
```

## Comandos principales

| Comando        | Propósito                                       |
| -------------- | ----------------------------------------------- |
| `pnpm dev`     | Inicia la web y la API en modo desarrollo.      |
| `pnpm dev:web` | Inicia solo la web.                             |
| `pnpm dev:api` | Inicia solo la API.                             |
| `pnpm check`   | Ejecuta formato, lint, tipos, pruebas y build.  |
| `pnpm format`  | Aplica el formato del repositorio.              |
| `pnpm test`    | Ejecuta las pruebas existentes.                 |
| `pnpm doctor`  | Comprueba las herramientas mínimas del entorno. |

## Estructura

```text
.
├── apps/
│   ├── api/                 # Servicio HTTP; solo health check por ahora
│   └── web/                 # Aplicación Next.js y boceto navegable
├── packages/
│   └── contracts/           # Tipos compartidos, sin entidades del dominio
├── docs/
│   ├── adr/                 # Registro de decisiones de arquitectura
│   ├── requirements/        # Convenciones para especificar y trazar requisitos
│   ├── ARCHITECTURE.md
│   ├── ROLES.md
│   ├── SCOPE.md
│   └── UI-GUIDE.md
├── infra/database/          # Punto de entrada para futuras migraciones
├── .github/                 # CI y plantillas de colaboración
└── compose.yaml             # PostgreSQL local opcional
```

## Antes de implementar

1. Revisar [el alcance y los límites](docs/SCOPE.md).
2. Usar [la guía del boceto](docs/UI-GUIDE.md) para discutir la futura navegación.
3. Asignar [los roles del equipo](docs/ROLES.md) para la unidad actual.
4. Completar la plantilla oficial de requisitos entregada por el curso.
5. Registrar decisiones importantes en [un ADR](docs/adr/README.md).
6. Elegir y documentar autenticación, persistencia, editor, PDF e integraciones antes de agregar dependencias.

Las reglas de trabajo están en [CONTRIBUTING.md](CONTRIBUTING.md) y la vista arquitectónica inicial en [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Licencia

Pendiente de decisión del equipo. No se agregó una licencia para evitar asumir permisos que el grupo todavía no ha acordado.
