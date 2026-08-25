import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProductSection, productSections } from "../_data/navigation";

type SectionPageProps = Readonly<{
  params: Promise<{ section: string }>;
}>;

export const dynamicParams = false;

export function generateStaticParams() {
  return productSections.map((section) => ({ section: section.slug }));
}

export async function generateMetadata({ params }: SectionPageProps): Promise<Metadata> {
  const { section: slug } = await params;
  const section = getProductSection(slug);

  if (!section) {
    return { title: "Sección no encontrada" };
  }

  return {
    title: `${section.label} · En construcción`,
    description: section.description,
  };
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section: slug } = await params;
  const section = getProductSection(slug);

  if (!section) {
    notFound();
  }

  return (
    <div className="construction-page">
      <nav className="breadcrumb" aria-label="Ruta de navegación">
        <Link href="/">Resumen</Link>
        <span aria-hidden="true">/</span>
        <span>{section.label}</span>
      </nav>

      <section className="construction-hero" aria-labelledby="construction-title">
        <div className={`construction-code module-code-${section.tone}`} aria-hidden="true">
          {section.code}
        </div>
        <div className="construction-copy">
          <p className="construction-eyebrow">
            <span className="status-dot status-dot-amber" aria-hidden="true" />
            Módulo en construcción
          </p>
          <h1 id="construction-title">{section.label}</h1>
          <p>{section.description}</p>
          <div className="construction-actions">
            <Link className="button button-primary" href="/">
              Volver al resumen
            </Link>
            <Link className="button button-secondary" href="/#modulos">
              Ver todos los módulos
            </Link>
          </div>
        </div>
      </section>

      <div className="construction-grid">
        <section className="panel future-scope" aria-labelledby="future-scope-title">
          <div className="panel-header">
            <div>
              <p className="panel-eyebrow">Alcance previsto</p>
              <h2 id="future-scope-title">Qué podría incluir este módulo</h2>
            </div>
            <span className="demo-chip">Propuesta inicial</span>
          </div>

          <ul className="future-list">
            {section.planned.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <div className="construction-note">
            <span className="note-icon" aria-hidden="true">
              i
            </span>
            <p>
              Esta pantalla es únicamente una guía visual. No hay formularios, persistencia ni
              operaciones del dominio conectadas.
            </p>
          </div>
        </section>

        <aside className="panel construction-roadmap" aria-labelledby="roadmap-title">
          <p className="panel-eyebrow">Camino sugerido</p>
          <h2 id="roadmap-title">Próximas decisiones</h2>
          <div className="roadmap-steps">
            <div className="roadmap-step roadmap-step-current">
              <span>01</span>
              <div>
                <strong>Definir</strong>
                <p>Acordar requisitos con el equipo.</p>
              </div>
            </div>
            <div className="roadmap-step">
              <span>02</span>
              <div>
                <strong>Diseñar</strong>
                <p>Validar flujos y datos necesarios.</p>
              </div>
            </div>
            <div className="roadmap-step">
              <span>03</span>
              <div>
                <strong>Implementar</strong>
                <p>Construir la funcionalidad real.</p>
              </div>
            </div>
            <div className="roadmap-step">
              <span>04</span>
              <div>
                <strong>Validar</strong>
                <p>Probar con casos representativos.</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
