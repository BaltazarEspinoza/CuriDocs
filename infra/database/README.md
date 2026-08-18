# Persistencia

`compose.yaml` prepara una instancia local de PostgreSQL, pero la aplicación todavía no se conecta y no existe un esquema. Esto evita convertir el modelo preliminar del enunciado en una implementación antes de validarlo.

Cuando el equipo elija la estrategia de persistencia:

1. crear y aceptar un ADR que compare alternativas;
2. agregar la dependencia solo al backend o a un paquete de persistencia dedicado;
3. guardar migraciones reproducibles en `infra/database/migrations/`;
4. agregar semillas exclusivamente con datos ficticios;
5. documentar backup, restauración y reversión;
6. incluir una prueba de integración aislada.

No versionar volcados con información real ni contraseñas.
