"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useState } from "react";

import { primaryNavigation } from "../_data/navigation";

type AppShellProps = Readonly<{
  children: ReactNode;
}>;

const footerNavigation = [
  { href: "/ayuda", label: "Ayuda y guía", code: "?" },
  { href: "/configuracion", label: "Configuración", code: "AJ" },
] as const;

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="app-shell">
      {isNavigationOpen ? (
        <button
          aria-label="Cerrar navegación"
          className="navigation-scrim"
          onClick={() => setIsNavigationOpen(false)}
          type="button"
        />
      ) : null}

      <aside className={`sidebar${isNavigationOpen ? " sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <Link className="brand-lockup" href="/" onClick={() => setIsNavigationOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              C
            </span>
            <span>
              <strong>CuriDocs</strong>
              <small>Gestión documental</small>
            </span>
          </Link>
          <span className="prototype-tag">Boceto</span>
        </div>

        <div className="sidebar-context">
          <span>Espacio actual</span>
          <strong>Proyecto de ejemplo</strong>
          <small>Datos demostrativos</small>
        </div>

        <nav className="sidebar-navigation" aria-label="Navegación principal">
          <p className="navigation-label">Principal</p>
          {primaryNavigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`navigation-link${active ? " navigation-link-active" : ""}`}
                href={item.href}
                key={item.href}
                onClick={() => setIsNavigationOpen(false)}
              >
                <span className="navigation-code" aria-hidden="true">
                  {item.code}
                </span>
                <span>{item.label}</span>
                {item.href === "/alarmas" ? <span className="navigation-count">3</span> : null}
              </Link>
            );
          })}
        </nav>

        <nav className="sidebar-footer" aria-label="Navegación secundaria">
          {footerNavigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`navigation-link${active ? " navigation-link-active" : ""}`}
                href={item.href}
                key={item.href}
                onClick={() => setIsNavigationOpen(false)}
              >
                <span className="navigation-code" aria-hidden="true">
                  {item.code}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="workspace">
        <header className="topbar">
          <div className="topbar-context">
            <button
              aria-expanded={isNavigationOpen}
              aria-label="Abrir navegación"
              className="menu-button"
              onClick={() => setIsNavigationOpen(true)}
              type="button"
            >
              <span aria-hidden="true">☰</span>
            </button>
            <div>
              <span>Proyecto activo</span>
              <strong>Plataforma CuriDocs</strong>
            </div>
          </div>

          <div className="topbar-actions">
            <Link className="search-trigger" href="/buscar">
              <span className="search-symbol" aria-hidden="true">
                ⌕
              </span>
              <span>Buscar en CuriDocs</span>
              <kbd>Ctrl K</kbd>
            </Link>
            <Link
              className="notification-button"
              href="/notificaciones"
              aria-label="Notificaciones"
            >
              <span aria-hidden="true">◌</span>
              <i aria-hidden="true" />
            </Link>
            <Link className="user-avatar" href="/equipo" aria-label="Ver equipo">
              BC
            </Link>
          </div>
        </header>

        <main className="workspace-content">{children}</main>
      </div>
    </div>
  );
}
