"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Check, ArrowRight } from "lucide-react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  // Fade-in animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    // Here you would integrate n8n webhook
  };

  return (
    <main className="min-h-screen">
      {/* ─── NAVBAR ──────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-dark-800/80 backdrop-blur-xl border-b border-white/[.04]">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 py-4">
          <Link href="#" className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Aaron Automations
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <Link href="#servicios" className="hover:text-white transition-colors">
              Servicios
            </Link>
            <Link href="#planes" className="hover:text-white transition-colors">
              Planes
            </Link>
            <Link href="#proceso" className="hover:text-white transition-colors">
              Proceso
            </Link>
            <Link href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-white"
            aria-label="Menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-nav fixed inset-y-0 right-0 w-64 bg-dark-900 border-l border-white/5 p-8 flex flex-col gap-5 md:hidden z-50 ${isMenuOpen ? "open" : ""
            }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end text-slate-400 hover:text-white"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
          <a onClick={() => setIsMenuOpen(false)} href="#servicios" className="text-slate-300 hover:text-white">
            Servicios
          </a>
          <a onClick={() => setIsMenuOpen(false)} href="#planes" className="text-slate-300 hover:text-white">
            Planes
          </a>
          <a onClick={() => setIsMenuOpen(false)} href="#proceso" className="text-slate-300 hover:text-white">
            Proceso
          </a>
          <a onClick={() => setIsMenuOpen(false)} href="#contacto" className="text-slate-300 hover:text-white">
            Contacto
          </a>
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center hero-grid overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none"></div>

        <div className="relative max-w-[800px] mx-auto w-full px-6 text-center pt-32 pb-20">
          <div className="fade-up inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent-light text-xs font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
            Automatización inteligente con n8n &amp; IA
          </div>

          <h1 className="fade-up delay-1 text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-white">
            Automatiza tu e-commerce con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              IA
            </span>
          </h1>

          <p className="fade-up delay-2 mt-6 text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Leads en WhatsApp al instante, recuperación de carritos abandonados, soporte 24/7 y más –{" "}
            <span className="text-slate-300 font-medium">sin contratar personal extra.</span>
          </p>

          <div className="fade-up delay-3 mt-9">
            <a
              href="https://calendly.com/tu-agencia/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blue inline-block text-white px-7 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-accent/15"
            >
              Agendar una llamada
            </a>
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS ───────────────────────────────────────── */}
      <section id="servicios" className="py-24 lg:py-28 bg-dark-900">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <p className="text-accent font-semibold text-xs tracking-[.2em] uppercase mb-3">
              Servicios
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Todo lo que automatizamos por ti
            </h2>
            <p className="mt-3 text-slate-400 text-sm max-w-md mx-auto">
              Conectamos tu e-commerce con IA para que cada proceso trabaje solo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <ServiceCard
              icon={
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              }
              title="Recuperación carritos IA"
              description="Mensajes automáticos por WhatsApp y email para recuperar ventas perdidas con IA conversacional."
              tags={["WhatsApp", "Email", "IA"]}
              delay=""
            />
            <ServiceCard
              icon={
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              }
              title="Soporte automático 24/7"
              description="Agente IA que responde dudas de tus clientes al instante, cualquier día y a cualquier hora."
              tags={["Chatbot", "RAG", "24/7"]}
              delay="delay-1"
            />
            <ServiceCard
              icon={
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              }
              title="Reportes ventas automáticos"
              description="Informes semanales con métricas clave directo a tu email o Google Sheets. Sin tocar nada."
              tags={["Sheets", "Analytics"]}
              delay="delay-2"
            />
            <ServiceCard
              icon={
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              }
              title="Alertas stock y proveedores"
              description="Notificaciones inteligentes cuando el inventario baja. Contacta proveedores automáticamente."
              tags={["Alertas", "Inventario"]}
              delay="delay-3"
            />
          </div>
        </div>
      </section>

      {/* ─── PLANES ──────────────────────────────────────────── */}
      <section id="planes" className="py-24 lg:py-28">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <p className="text-accent font-semibold text-xs tracking-[.2em] uppercase mb-3">Planes</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Elige el plan que encaja con tu negocio
            </h2>
            <p className="mt-3 text-slate-400 text-sm max-w-lg mx-auto">
              Setup completo, onboarding personalizado y soporte técnico incluido en todos los planes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard
              name="Básico"
              setupPrice="500 €"
              monthlyPrice="79 €"
              features={[
                "Recuperación carritos WhatsApp + Email",
                "Confirmación pedidos automática",
                "Guardado en Sheets + alertas stock",
              ]}
              delay=""
              isPopular={false}
            />
            <PricingCard
              name="Medio"
              setupPrice="800 €"
              monthlyPrice="119 €"
              features={[
                "Todo lo del plan Básico",
                "IA respuestas automáticas de soporte",
                "Reporte semanal ventas automático",
                "Lead scoring básico",
              ]}
              delay="delay-1"
              isPopular={true}
            />
            <PricingCard
              name="Alto"
              setupPrice="1.500 €"
              monthlyPrice="199 €"
              features={[
                "Todo lo del plan Medio",
                "Agente IA 24/7 con RAG",
                "Upsell / cross-sell automático",
                "Dashboard métricas + mantenimiento prioritario",
              ]}
              delay="delay-2"
              isPopular={false}
            />
          </div>
        </div>
      </section>

      {/* ─── PROCESO ─────────────────────────────────────────── */}
      <section id="proceso" className="py-24 lg:py-28 bg-dark-900">
        <div className="max-w-[600px] mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-accent font-semibold text-xs tracking-[.2em] uppercase mb-3">
              Proceso
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Cómo trabajamos contigo
            </h2>
          </div>

          <div className="fade-up proceso-step bg-dark-700 border border-white/[.05] rounded-2xl p-8 text-center">
            <div className="step-number w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-accent/10 border border-accent/25 text-accent text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Diagnóstico gratuito</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
              Llamada de 30 min para entender tu negocio e identificar los procesos que podemos
              automatizar con mayor impacto.
            </p>
            <div className="flex justify-center gap-3 mt-4">
              <Tag text="30 min" />
              <Tag text="Gratis" />
              <Tag text="Sin compromiso" />
            </div>
          </div>

          <div className="connector-line fade-up"></div>

          <div className="fade-up delay-1 proceso-step bg-dark-700 border border-white/[.05] rounded-2xl p-8 text-center max-w-[85%] mx-auto">
            <div className="step-number w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-accent/10 border border-accent/25 text-accent text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Desarrollo</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
              En 1–3 semanas construimos tus automatizaciones. Comunicación constante por WhatsApp, sin
              sorpresas.
            </p>
            <div className="flex justify-center gap-3 mt-4">
              <Tag text="1–3 semanas" />
              <Tag text="WhatsApp" />
            </div>
          </div>

          <div className="connector-line fade-up"></div>

          <div className="fade-up delay-2 proceso-step bg-dark-700 border border-white/[.05] rounded-2xl p-8 text-center max-w-[70%] mx-auto">
            <div className="step-number w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-accent/10 border border-accent/25 text-accent text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Lanzamiento y soporte</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
              Implementación por fases, formación de tu equipo y soporte técnico 24/7 para que todo
              funcione perfecto.
            </p>
            <div className="flex justify-center gap-3 mt-4">
              <Tag text="Por fases" />
              <Tag text="Soporte 24/7" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACTO ────────────────────────────────────────── */}
      <section id="contacto" className="py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[.03] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-[550px] mx-auto px-6">
          <div className="text-center mb-10 fade-up">
            <p className="text-accent font-semibold text-xs tracking-[.2em] uppercase mb-3">
              Contacto
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              ¿Listo para automatizar tu negocio?
            </h2>
            <p className="mt-3 text-slate-400 text-sm max-w-md mx-auto">
              Déjanos tus datos y te contactaremos con un plan personalizado para tu e-commerce.
            </p>
          </div>

          <div className="fade-up delay-1 bg-dark-700 border border-white/[.05] rounded-2xl p-8">
            {formStatus === "success" ? (
              <p className="text-center text-green-400 text-sm mt-5 font-medium">
                ✅ ¡Gracias! Te contactaremos pronto.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="nombre" className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="bg-dark-600 border border-white/[.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-accent/40 focus:ring-1 focus:ring-accent/20 outline-none transition"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="telefono" className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    required
                    placeholder="+34 600 000 000"
                    className="bg-dark-600 border border-white/[.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-accent/40 focus:ring-1 focus:ring-accent/20 outline-none transition"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="bg-dark-600 border border-white/[.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-accent/40 focus:ring-1 focus:ring-accent/20 outline-none transition"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="nicho" className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                    Sector
                  </label>
                  <select
                    id="nicho"
                    required
                    className="bg-dark-600 border border-white/[.08] rounded-lg px-4 py-2.5 text-sm text-white focus:border-accent/40 focus:ring-1 focus:ring-accent/20 outline-none transition"
                  >
                    <option value="" disabled selected>
                      Selecciona
                    </option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="restaurante">Restaurante / Hostelería</option>
                    <option value="clinica">Clínica / Salud</option>
                    <option value="agencia">Agencia / Marketing</option>
                    <option value="educacion">Educación</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="sm:col-span-2 flex flex-col gap-1">
                  <label htmlFor="descripcion" className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">¿Qué necesitas automatizar?</label>
                  <textarea id="descripcion" rows={3} placeholder="Ej: Quiero recuperar carritos abandonados por WhatsApp y tener un chatbot de soporte..." className="bg-dark-600 border border-white/[.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-accent/40 focus:ring-1 focus:ring-accent/20 outline-none transition resize-none"></textarea>
                </div>

                <div className="sm:col-span-2 flex flex-col gap-1">
                  <label className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                    Plan de interés
                  </label>
                  <div className="grid grid-cols-3 gap-3 mt-1">
                    <PlanOption name="Básico" price="500 € setup" value="basico" required />
                    <PlanOption name="Medio" price="800 € setup" value="medio" />
                    <PlanOption name="Alto" price="1.500 € setup" value="alto" />
                  </div>
                </div>

                <div className="sm:col-span-2 mt-1">
                  <button
                    type="submit"
                    className="btn-blue w-full text-white px-5 py-2.5 rounded-xl font-semibold text-sm"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer className="border-t border-white/[.04] bg-dark-900">
        <div className="max-w-[1100px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="#" className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-base mb-1">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Aaron Automations
            </Link>
            <p className="text-[11px] text-slate-500">
              © 2026 Aaron Automations. Todos los derechos reservados.
            </p>
          </div>

          <p className="text-[10px] text-slate-500 tracking-widest uppercase text-center">
            Shopify · WooCommerce · WhatsApp Business · Google Sheets · CRMs
          </p>

          <div className="flex items-center gap-5">
            <Link href="#" className="text-slate-500 hover:text-white transition-colors text-xs">
              Privacidad
            </Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors text-xs">
              Términos
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ─── Subcomponents ──────────────────────────────────────

function ServiceCard({
  icon,
  title,
  description,
  tags,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  delay: string;
}) {
  return (
    <div className={`fade-up ${delay} service-card bg-dark-700 border border-white/[.05] rounded-2xl p-8`}>
      <div className="flex items-start gap-5">
        <div className="icon-ring w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-accent/10 border border-accent/20">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-1.5">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
          <div className="flex items-center gap-2 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-accent/80 font-medium bg-accent/10 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  name,
  monthlyPrice,
  setupPrice,
  features,
  delay,
  isPopular,
}: {
  name: string;
  monthlyPrice: string;
  setupPrice: string;
  features: string[];
  delay: string;
  isPopular: boolean;
}) {
  return (
    <div
      className={`fade-up ${delay} card-hover relative bg-dark-700 ${isPopular ? "border-2 border-accent/25 ring-1 ring-accent/10" : "border border-white/[.05]"
        } rounded-2xl p-8 flex flex-col`}
    >
      {isPopular && (
        <div className="badge-pulse absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
          Popular
        </div>
      )}
      <p className={`text-xs font-semibold ${isPopular ? "text-accent" : "text-slate-500"} uppercase tracking-wider`}>
        {name}
      </p>
      <div className="flex items-end gap-1 mt-2 mb-0.5">
        <span className="text-3xl font-extrabold text-white">{monthlyPrice}</span>
        <span className="text-slate-500 text-sm mb-0.5">/mes</span>
      </div>
      <p className="text-xs text-slate-500 mb-6">+ {setupPrice} setup único</p>
      <hr className="border-white/[.06] mb-6" />
      <ul className="flex-1 space-y-3 text-sm text-slate-300">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#contacto"
        className={`${isPopular
            ? "btn-blue text-white"
            : "btn-outline border border-white/10 text-slate-300"
          } mt-8 block text-center px-5 py-2.5 rounded-xl font-semibold text-sm`}
      >
        Empezar
      </a>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="text-[10px] text-accent/80 font-medium bg-accent/10 px-2.5 py-0.5 rounded-full">
      {text}
    </span>
  );
}

function PlanOption({ name, price, value, required }: { name: string; price: string; value: string; required?: boolean }) {
  return (
    <label className="plan-option cursor-pointer">
      <input type="radio" name="plan" value={value} className="sr-only peer" required={required} />
      <div className="peer-checked:border-accent peer-checked:bg-accent/10 peer-checked:text-white border border-white/[.08] bg-dark-600 rounded-lg px-3 py-3 text-center transition-all hover:border-accent/30">
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-[10px] text-slate-500 mt-0.5">{price}</p>
      </div>
    </label>
  );
}
