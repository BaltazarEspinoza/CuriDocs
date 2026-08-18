# Guía de contribución

## Flujo recomendado

1. Actualiza `main` antes de crear una rama.
2. Crea una rama corta y enfocada: `feature/descripcion`, `fix/descripcion`, `docs/descripcion` o `chore/descripcion`.
3. Mantén cada cambio dentro de un solo objetivo.
4. Ejecuta `pnpm check` antes de abrir un pull request.
5. Usa la plantilla del pull request y solicita al menos una revisión.
6. Integra solo cuando el CI esté en verde y las conversaciones estén resueltas.

## Commits

Usar mensajes basados en Conventional Commits:

```text
feat: agrega formulario de creación de proyectos
fix: valida fechas del hito
docs: registra decisión del editor enriquecido
test: cubre reglas de trazabilidad
chore: actualiza dependencias de desarrollo
```

No mezclar refactorizaciones amplias con una funcionalidad evaluable en el mismo commit.

## Decisiones de arquitectura

Crear un ADR cuando la decisión afecte a más de un módulo, incorpore una dependencia estructural o sea difícil de revertir. Copiar `docs/adr/000-template.md`, asignar el siguiente número y actualizar el índice.

Ejemplos: proveedor de autenticación, ORM, almacenamiento de imágenes, editor enriquecido, motor de PDF o estrategia de historial.

## Definición de terminado

Un cambio está listo cuando:

- responde a un requisito o tarea identificable;
- incluye validación y manejo de errores cuando corresponda;
- mantiene o agrega pruebas proporcionales al riesgo;
- actualiza contratos y documentación afectados;
- no introduce secretos ni datos personales;
- supera `pnpm check`;
- fue revisado por otra persona del equipo.

## Variables y secretos

- Copiar `.env.example` como `.env`.
- Nunca versionar `.env`, tokens, claves, credenciales ni datos reales de estudiantes.
- Agregar a `.env.example` solo nombres y valores locales no sensibles.
- Documentar cualquier variable nueva en el pull request.

## Cambios de base de datos

El repositorio todavía no fija un ORM ni una herramienta de migraciones. Cuando el equipo lo decida:

- registrar la elección en un ADR;
- guardar migraciones versionadas en `infra/database/migrations/`;
- evitar cambios manuales que no puedan reproducirse;
- incluir estrategia de reversión y datos de prueba no sensibles.
