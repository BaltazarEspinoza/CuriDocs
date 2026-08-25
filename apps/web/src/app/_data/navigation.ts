export type ProductSection = Readonly<{
  slug: string;
  href: `/${string}`;
  label: string;
  shortLabel: string;
  code: string;
  eyebrow: string;
  description: string;
  planned: readonly string[];
  tone: "green" | "blue" | "amber" | "violet" | "rose";
}>;

export const productSections = [
  {
    slug: "proyectos",
    href: "/proyectos",
    label: "Proyectos",
    shortLabel: "Proyectos",
    code: "PR",
    eyebrow: "Organización",
    description: "Espacio para crear proyectos, definir responsables y revisar su avance.",
    planned: ["Listado y filtros", "Ficha del proyecto", "Hitos y estados"],
    tone: "green",
  },
  {
    slug: "elementos",
    href: "/elementos",
    label: "Elementos del sistema",
    shortLabel: "Elementos",
    code: "EL",
    eyebrow: "Estructura",
    description: "Catálogo de los elementos que componen cada proyecto y sus relaciones.",
    planned: ["Árbol de elementos", "Metadatos", "Relaciones y dependencias"],
    tone: "blue",
  },
  {
    slug: "documentos",
    href: "/documentos",
    label: "Documentos",
    shortLabel: "Documentos",
    code: "DO",
    eyebrow: "Información",
    description: "Biblioteca para registrar, clasificar y consultar documentación del proyecto.",
    planned: ["Carga de archivos", "Versiones", "Estados de revisión"],
    tone: "violet",
  },
  {
    slug: "trazabilidad",
    href: "/trazabilidad",
    label: "Trazabilidad",
    shortLabel: "Trazabilidad",
    code: "TR",
    eyebrow: "Control",
    description: "Vista futura de vínculos, cambios y cobertura entre elementos y documentos.",
    planned: ["Matriz de trazabilidad", "Historial de cambios", "Cobertura"],
    tone: "amber",
  },
  {
    slug: "estadisticas",
    href: "/estadisticas",
    label: "Estadísticas",
    shortLabel: "Estadísticas",
    code: "ES",
    eyebrow: "Análisis",
    description: "Indicadores y gráficos para entender el estado general del trabajo.",
    planned: ["Indicadores clave", "Gráficos comparativos", "Exportación"],
    tone: "rose",
  },
  {
    slug: "tareas",
    href: "/tareas",
    label: "Tareas",
    shortLabel: "Tareas",
    code: "TA",
    eyebrow: "Coordinación",
    description: "Bandeja para organizar pendientes, responsables y fechas relevantes.",
    planned: ["Tablero de tareas", "Prioridades", "Fechas y responsables"],
    tone: "green",
  },
  {
    slug: "equipo",
    href: "/equipo",
    label: "Equipo",
    shortLabel: "Equipo",
    code: "EQ",
    eyebrow: "Personas",
    description: "Directorio de participantes y futuros permisos dentro de cada proyecto.",
    planned: ["Integrantes", "Roles", "Permisos"],
    tone: "blue",
  },
  {
    slug: "alarmas",
    href: "/alarmas",
    label: "Alarmas",
    shortLabel: "Alarmas",
    code: "AL",
    eyebrow: "Seguimiento",
    description: "Centro de avisos para vencimientos, inconsistencias y acciones pendientes.",
    planned: ["Reglas de aviso", "Severidad", "Historial"],
    tone: "amber",
  },
  {
    slug: "buscar",
    href: "/buscar",
    label: "Buscar",
    shortLabel: "Buscar",
    code: "BU",
    eyebrow: "Exploración",
    description: "Buscador global para encontrar proyectos, elementos y documentos.",
    planned: ["Búsqueda global", "Filtros", "Resultados agrupados"],
    tone: "violet",
  },
  {
    slug: "notificaciones",
    href: "/notificaciones",
    label: "Notificaciones",
    shortLabel: "Avisos",
    code: "NO",
    eyebrow: "Actividad",
    description: "Bandeja personal de novedades y cambios que requieren atención.",
    planned: ["Actividad reciente", "Preferencias", "Lectura y archivo"],
    tone: "rose",
  },
  {
    slug: "ayuda",
    href: "/ayuda",
    label: "Ayuda y guía",
    shortLabel: "Ayuda",
    code: "AY",
    eyebrow: "Soporte",
    description: "Documentación breve para orientar a quienes utilicen el sistema.",
    planned: ["Primeros pasos", "Preguntas frecuentes", "Glosario"],
    tone: "green",
  },
  {
    slug: "configuracion",
    href: "/configuracion",
    label: "Configuración",
    shortLabel: "Configuración",
    code: "CO",
    eyebrow: "Preferencias",
    description: "Ajustes generales del espacio de trabajo y sus convenciones.",
    planned: ["Datos del espacio", "Convenciones", "Preferencias"],
    tone: "blue",
  },
] as const satisfies readonly ProductSection[];

const mainSectionSlugs = [
  "proyectos",
  "elementos",
  "documentos",
  "trazabilidad",
  "estadisticas",
  "tareas",
  "equipo",
  "alarmas",
] as const;

export const primaryNavigation = [
  { href: "/", label: "Resumen", code: "IN" },
  ...mainSectionSlugs.map((slug) => {
    const section = productSections.find((item) => item.slug === slug);

    if (!section) {
      throw new Error(`Sección de navegación no encontrada: ${slug}`);
    }

    return { href: section.href, label: section.shortLabel, code: section.code };
  }),
] as const;

export function getProductSection(slug: string) {
  return productSections.find((section) => section.slug === slug);
}
