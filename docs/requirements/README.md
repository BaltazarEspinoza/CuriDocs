# Convenciones para requisitos y trazabilidad

La especificación oficial debe mantenerse en la plantilla publicada por el curso. Este directorio solo define convenciones para relacionarla con código, issues, decisiones y pruebas; no la reemplaza.

## Identificadores sugeridos

| Elemento                 | Formato    | Ejemplo    |
| ------------------------ | ---------- | ---------- |
| Requisito de usuario     | `RU-NNN`   | `RU-001`   |
| Requisito de software    | `RS-NNN`   | `RS-014`   |
| Caso de prueba           | `CP-NNN`   | `CP-009`   |
| Decisión de arquitectura | `ADR-NNN`  | `ADR-001`  |
| Riesgo                   | `RISK-NNN` | `RISK-003` |

No reutilizar identificadores eliminados. Marcar el elemento como obsoleto y enlazar su reemplazo.

## Contenido mínimo de un issue funcional

- identificadores de requisitos relacionados;
- contexto y resultado esperado;
- criterios de aceptación observables;
- exclusiones explícitas;
- riesgos o dependencias;
- evidencia prevista: prueba automática, revisión visual o prueba con usuarios.

## Trazabilidad mínima

```text
Requisito oficial → Issue → ADR o diseño → Pull request → Prueba/evidencia
```

Usar los identificadores en el título o cuerpo del issue y del pull request. La herramienta definitiva de matrices deberá diseñarse como parte del proyecto; no está implementada en esta base.
