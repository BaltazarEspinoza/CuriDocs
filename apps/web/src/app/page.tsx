const services = [
  {
    name: "Web",
    detail: "Next.js + TypeScript",
    state: "Lista",
  },
  {
    name: "API",
    detail: "Fastify en el puerto 3001",
    state: "Preparada",
  },
  {
    name: "Datos",
    detail: "PostgreSQL local opcional",
    state: "Preparada",
  },
  {
    name: "Calidad",
    detail: "Lint, tipos, pruebas y CI",
    state: "Activa",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <div className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Entorno de prueba
        </div>

        <p className="brand">CuriDocs</p>
        <h1 id="page-title">El repositorio está listo para comenzar.</h1>
        <p className="lead">
          Esta pantalla confirma que la aplicación web inicia correctamente. La lógica del proyecto
          todavía no está implementada: ese trabajo queda intencionalmente para el equipo.
        </p>

        <div className="command" aria-label="Comando para iniciar el entorno">
          <span>Iniciar todo</span>
          <code>pnpm dev</code>
        </div>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p>Base instalada</p>
          <h2 id="services-title">Piezas preparadas</h2>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.name}>
              <span className="service-number">0{index + 1}</span>
              <div>
                <h3>{service.name}</h3>
                <p>{service.detail}</p>
              </div>
              <span className="service-state">{service.state}</span>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>Preparación técnica inicial · Sin funcionalidades del dominio</p>
        <a href="/api/health">Ver salud de la web</a>
      </footer>
    </main>
  );
}
