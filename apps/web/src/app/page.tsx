import Link from "next/link";

import { productSections } from "./_data/navigation";

const stats = [
  {
    value: "24",
    label: "Requisitos registrados",
    detail: "+4 esta semana",
    tone: "green",
  },
  {
    value: "6",
    label: "Módulos definidos",
    detail: "3 con trabajo pendiente",
    tone: "blue",
  },
  {
    value: "11",
    label: "Casos de prueba",
    detail: "7 por revisar",
    tone: "violet",
  },
  {
    value: "38%",
    label: "Avance estimado",
    detail: "Boceto demostrativo",
    tone: "amber",
  },
] as const;

const dashboardModules = productSections.filter((section) =>
  ["proyectos", "elementos", "documentos", "trazabilidad", "estadisticas", "tareas"].includes(
    section.slug,
  ),
);

const mockTasks = [
  {
    title: "Revisar estructura documental",
    area: "Documentos",
    owner: "AM",
    due: "28 ago",
    status: "Pendiente",
  },
  {
    title: "Definir estados de requisitos",
    area: "Elementos",
    owner: "BC",
    due: "30 ago",
    status: "En revisión",
  },
  {
    title: "Validar matriz de trazabilidad",
    area: "Trazabilidad",
    owner: "JP",
    due: "02 sep",
    status: "Planificada",
  },
] as const;

export default function HomePage() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-hero" aria-labelledby="page-title">
        <div>
          <p className="page-kicker">
            <span className="status-dot" aria-hidden="true" />
            Boceto interactivo · Datos demostrativos
          </p>
          <h1 id="page-title">Resumen del proyecto</h1>
          <p>
            Una primera guía visual de cómo podría organizarse CuriDocs. Explora sus módulos para
            discutir el alcance antes de construir la funcionalidad real.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="button button-secondary" href="/documentos">
            Explorar documentos
          </Link>
          <Link className="button button-primary" href="/proyectos">
            Ver proyectos
          </Link>
        </div>
      </section>

      <section className="stats-grid" aria-label="Indicadores demostrativos">
        {stats.map((stat) => (
          <article className={`stat-card stat-accent-${stat.tone}`} key={stat.label}>
            <p className="stat-value">{stat.value}</p>
            <h2 className="stat-label">{stat.label}</h2>
            <p className="stat-detail">{stat.detail}</p>
          </article>
        ))}
      </section>

      <div className="dashboard-grid">
        <section className="panel project-panel" aria-labelledby="progress-title">
          <div className="panel-header">
            <div>
              <p className="panel-eyebrow">Proyecto activo</p>
              <h2 id="progress-title">Plataforma CuriDocs</h2>
            </div>
            <Link className="text-link" href="/proyectos">
              Abrir proyecto <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="project-progress">
            <div className="progress-summary">
              <div>
                <strong>Hito 2 de 4</strong>
                <span>Definición y diseño</span>
              </div>
              <span className="demo-chip">38% estimado</span>
            </div>
            <div
              aria-label="Avance demostrativo del proyecto: 38 por ciento"
              aria-valuemax={100}
              aria-valuemin={0}
              aria-valuenow={38}
              className="progress-track"
              role="progressbar"
            >
              <span className="progress-fill" />
            </div>

            <div className="milestone-list">
              <div className="milestone-row">
                <span className="milestone-state milestone-complete" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <strong>Preparación técnica</strong>
                  <p>Repositorio, entornos y convenciones</p>
                </div>
                <span className="milestone-label">Completado</span>
              </div>
              <div className="milestone-row">
                <span className="milestone-state milestone-current" aria-hidden="true">
                  2
                </span>
                <div>
                  <strong>Boceto del producto</strong>
                  <p>Navegación, módulos y lenguaje visual</p>
                </div>
                <span className="milestone-label">Actual</span>
              </div>
              <div className="milestone-row">
                <span className="milestone-state" aria-hidden="true">
                  3
                </span>
                <div>
                  <strong>Implementación funcional</strong>
                  <p>Lógica que desarrollará el equipo</p>
                </div>
                <span className="milestone-label">Próximo</span>
              </div>
            </div>
          </div>
        </section>

        <aside className="panel attention-panel" aria-labelledby="attention-title">
          <div className="panel-header">
            <div>
              <p className="panel-eyebrow">Seguimiento</p>
              <h2 id="attention-title">Requiere atención</h2>
            </div>
            <span className="count-chip">3</span>
          </div>

          <div className="alert-list">
            <Link className="alert-row" href="/alarmas">
              <span className="alert-icon alert-high" aria-hidden="true">
                !
              </span>
              <div>
                <strong>2 documentos sin clasificar</strong>
                <p>Revisar metadatos pendientes</p>
              </div>
              <span aria-hidden="true">›</span>
            </Link>
            <Link className="alert-row" href="/tareas">
              <span className="alert-icon alert-medium" aria-hidden="true">
                3
              </span>
              <div>
                <strong>Tareas próximas a vencer</strong>
                <p>Durante los próximos siete días</p>
              </div>
              <span aria-hidden="true">›</span>
            </Link>
            <Link className="alert-row" href="/trazabilidad">
              <span className="alert-icon alert-low" aria-hidden="true">
                ↔
              </span>
              <div>
                <strong>Cobertura por confirmar</strong>
                <p>Cuatro vínculos sin validar</p>
              </div>
              <span aria-hidden="true">›</span>
            </Link>
          </div>

          <Link className="panel-action" href="/alarmas">
            Ver todas las alarmas
          </Link>
        </aside>
      </div>

      <section className="modules-section" id="modulos" aria-labelledby="modules-title">
        <div className="section-header">
          <div>
            <p className="panel-eyebrow">Mapa del sistema</p>
            <h2 id="modules-title">Módulos previstos</h2>
            <p>Cada tarjeta conduce a una página guía de la futura funcionalidad.</p>
          </div>
          <span className="demo-chip">Sin lógica conectada</span>
        </div>

        <div className="module-grid">
          {dashboardModules.map((module) => (
            <Link className="module-card" href={module.href} key={module.slug}>
              <span className={`module-code module-code-${module.tone}`} aria-hidden="true">
                {module.code}
              </span>
              <span className="module-card-body">
                <small>{module.eyebrow}</small>
                <strong>{module.label}</strong>
                <p>{module.description}</p>
              </span>
              <span className="module-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="panel tasks-panel" aria-labelledby="tasks-title">
        <div className="panel-header">
          <div>
            <p className="panel-eyebrow">Coordinación</p>
            <h2 id="tasks-title">Próximas tareas</h2>
          </div>
          <Link className="text-link" href="/tareas">
            Abrir tablero <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="tasks-table" role="table" aria-label="Tareas demostrativas">
          {mockTasks.map((task) => (
            <Link className="task-row" href="/tareas" key={task.title} role="row">
              <span className="task-check" aria-hidden="true" />
              <span className="task-main" role="cell">
                <strong>{task.title}</strong>
                <small>{task.area}</small>
              </span>
              <span className="task-owner" role="cell" aria-label={`Responsable ${task.owner}`}>
                {task.owner}
              </span>
              <time role="cell">{task.due}</time>
              <span className="task-status" role="cell">
                {task.status}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="workspace-footer">
        <p>Boceto de interfaz · Sin lógica de negocio ni persistencia</p>
        <Link href="/api/health">Comprobar salud de la web</Link>
      </footer>
    </div>
  );
}
