import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Aaron Automations – Automatiza tu e-commerce con IA",
  description: "Agencia de automatización con IA y n8n.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans bg-dark-800 text-slate-300`}>
        {children}
      </body>
    </html>
  );
}
