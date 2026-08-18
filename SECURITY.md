# Seguridad

Este es un repositorio académico en preparación. No publicar vulnerabilidades, tokens o datos personales en issues abiertos.

Hasta que el equipo defina un canal privado, comunicar problemas de seguridad directamente al responsable de arquitectura de la unidad y al docente. Al reportar, incluir una descripción, impacto, forma de reproducción y propuesta de contención, sin adjuntar credenciales reales.

## Reglas mínimas

- No versionar secretos ni archivos `.env`.
- No usar datos reales de estudiantes en desarrollo o pruebas.
- Validar entradas en los límites del sistema.
- Mantener dependencias revisadas y CI en verde.
- Modelar autorización por rol antes de exponer funcionalidades de edición.
- Revisar las exigencias institucionales antes de integrar autenticación única o Educandus.
