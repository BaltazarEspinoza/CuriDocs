import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AppShell } from "./_components/app-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CuriDocs",
    template: "%s | CuriDocs",
  },
  description: "Boceto navegable del sistema de gestión documental CuriDocs.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
