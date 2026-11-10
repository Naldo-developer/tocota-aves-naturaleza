import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Tocotá Aves y Naturaleza | Aviturismo responsable en Dagua", description: "Descubre la propuesta de aviturismo responsable de Tocotá, Dagua, Valle del Cauca. Observación de aves, educación ambiental y comunidad cerca de Cali.", openGraph: { title: "Tocotá Aves y Naturaleza", description: "Descubre, observa y conserva. Una propuesta de aviturismo responsable en Tocotá, Dagua.", locale: "es_CO", type: "website" }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }
