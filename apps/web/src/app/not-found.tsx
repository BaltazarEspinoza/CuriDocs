import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <p className="not-found-code">404</p>
      <p className="page-kicker">Sección no encontrada</p>
      <h1 id="not-found-title">Este espacio todavía no forma parte del boceto.</h1>
      <p>Regresa al resumen para explorar los módulos definidos para CuriDocs.</p>
      <Link className="button button-primary" href="/">
        Volver al resumen
      </Link>
    </section>
  );
}
