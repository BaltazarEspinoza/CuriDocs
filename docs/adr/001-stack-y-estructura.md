# ADR-001: Stack y estructura inicial

- Estado: Aceptada
- Fecha: 2026-08-18
- Responsables: Preparación inicial; validar con el equipo
- Requisitos relacionados: Framework web extensible, frontend, backend y base de datos

## Contexto

El repositorio partía vacío y el enunciado solicita un framework web con componentes reutilizables, frontend, backend y base de datos. La preparación debe permitir trabajo paralelo sin implementar el proyecto ni fijar su modelo preliminar.

## Alternativas consideradas

### Aplicación full-stack única

Reduce configuración inicial, pero mezcla más fácilmente las responsabilidades y dificulta que un equipo pequeño trabaje en frontend y backend de forma independiente.

### Monorepo con web y API separadas

Agrega una capa de orquestación, pero conserva un solo repositorio, permite contratos compartidos y hace explícitos los límites desde el inicio.

## Decisión

Usar pnpm y Turborepo; Next.js con TypeScript para la web; Fastify con TypeScript para la API; un paquete mínimo de contratos compartidos; y PostgreSQL local opcional mediante Compose.

Se usan runtimes Node.js normales, sin Edge, porque la aplicación futura necesitará base de datos y librerías de servidor. Node.js 24 ejecuta el TypeScript borrable de desarrollo y TypeScript genera JavaScript para producción. La web genera una salida independiente para facilitar un eventual despliegue en contenedor.

## Consecuencias

- Web y API pueden evolucionar y probarse por separado.
- Los contratos compartidos tienen una ubicación explícita.
- El equipo debe mantener compatibilidad entre aplicaciones.
- Turborepo agrega configuración, pero automatiza el grafo de tareas y el caché.
- PostgreSQL está disponible, pero todavía no existen esquema, ORM ni migraciones.

## Fuera de esta decisión

No se eligen todavía autenticación, ORM, editor, almacenamiento de imágenes, generador PDF, proveedor de pagos, integración institucional ni despliegue.

## Validación

La preparación se valida con `pnpm check`, el inicio simultáneo de web y API y las respuestas de sus endpoints de salud. El equipo debe revisar este ADR antes del primer incremento funcional.
