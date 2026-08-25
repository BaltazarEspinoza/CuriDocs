# Guía del boceto de interfaz

## Propósito

La aplicación web es una guía navegable para conversar sobre la forma futura de CuriDocs. No es un
prototipo funcional ni una interpretación definitiva del enunciado. Los números, responsables,
fechas, tareas y alertas son datos demostrativos escritos directamente en la interfaz.

## Recorrido disponible

La ruta `/` presenta un tablero de ejemplo con indicadores, avance, alertas, módulos y próximas
tareas. Desde el menú lateral, la barra superior y las tarjetas se puede visitar:

- `/proyectos`
- `/elementos`
- `/documentos`
- `/trazabilidad`
- `/estadisticas`
- `/tareas`
- `/equipo`
- `/alarmas`
- `/buscar`
- `/notificaciones`
- `/ayuda`
- `/configuracion`

Cada destino muestra una página de «En construcción» con una descripción y posibles piezas del
módulo. Esas listas sirven para orientar al equipo; deben validarse contra los requisitos oficiales
antes de implementarse.

## Qué se puede reutilizar

- La distribución general con navegación lateral y barra superior.
- Los componentes visuales de tarjetas, paneles, etiquetas, progreso y estados.
- El catálogo central de rutas en `apps/web/src/app/_data/navigation.ts`.
- La estructura responsive para escritorio, tablet y móvil.

## Qué debe reemplazarse al desarrollar

- Los arreglos de datos de muestra por consultas a casos de uso reales.
- Los enlaces de guía por flujos, formularios y acciones aprobadas.
- Las iniciales de usuarios y el proyecto activo por información autenticada.
- Los textos tentativos por terminología acordada con docentes y usuarios.
- Los porcentajes y estados simulados por cálculos definidos en los requisitos.

Antes de conectar cualquier módulo, el equipo debería definir sus estados vacíos, de carga, error y
éxito, además de permisos y criterios de aceptación.
