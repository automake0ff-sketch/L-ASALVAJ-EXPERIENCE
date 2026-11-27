import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = { title: "L’Asalvajá Experience · Sevilla Este", description: "Una experiencia digital de demo para descubrir el tapeo, las meriendas y el ambiente de L’Asalvajá.", robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
