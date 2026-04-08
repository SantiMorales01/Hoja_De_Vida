"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Inicio",      id: "inicio" },
  { label: "Sobre mí",    id: "sobre-mi" },
  { label: "Experiencia", id: "experiencia" },
  { label: "Proyectos",   id: "proyectos" },
  { label: "Contáctame",  id: "contactame" },
];

const SKILLS = [
  "Trabajo en equipo",
  "Comunicación",
  "Proactividad",
  "Gestión del tiempo",
  "Atención al cliente",
  "Flexibilidad",
];

const PROYECTOS = [
  {
    titulo: "Plataforma web — Supermercado",
    descripcion: "Sistema de gestión de compra/venta, control de inventario y organización de productos para un supermercado local.",
    tags: ["Spring Boot", "MySQL", "HTML/CSS"],
    color: "from-emerald-400/20 to-teal-400/10",
  },
  {
    titulo: "Aplicaciones web",
    descripcion: "Interfaces interactivas construidas con HTML, CSS y JavaScript, enfocadas en usabilidad y diseño responsivo.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "from-sky-400/20 to-blue-400/10",
  },
  {
    titulo: "Proyectos académicos",
    descripcion: "Soluciones a problemas reales aplicando estructuras de datos, algoritmos y lógica computacional.",
    tags: ["Java", "Python", "Algoritmos"],
    color: "from-violet-400/20 to-purple-400/10",
  },
];

const EDUCACION = [
  { titulo: "Ingeniería de Sistemas",                        lugar: "Universidad de Ibagué",        periodo: "2023 — Presente", activo: true  },
  { titulo: "Técnico en Diseño e Integración de Multimedia", lugar: "SENA",                         periodo: "2021 — 2022",     activo: false },
  { titulo: "Bachillerato",                                   lugar: "I.E. Leonidas Rubio Villegas", periodo: "Hasta 2021",      activo: false },
];

const REFERENCIAS = [
  { nombre: "Andrés Morales", cargo: "Ingeniero de Petróleos", tel: "323 284 7716", inicial: "A" },
  { nombre: "Yeferson Gasca", cargo: "Empleado",               tel: "318 866 7940", inicial: "Y" },
];

export default function Portfolio() {
  const [dark,      setDark]      = useState(false);
  const [fontLevel, setFontLevel] = useState(1);
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [msgSent,   setMsgSent]   = useState(false);
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Escalar fuente en el <html> para que todos los rem de Tailwind hereden
  useEffect(() => {
    const sizes = ["14px", "15px", "16px"];
    document.documentElement.style.fontSize = sizes[fontLevel];
  }, [fontLevel]);

  // ── Tokens de color ──────────────────────────────────────────────────────────
  const pageBg   = dark ? "bg-[#0d1117]"  : "bg-[#eef2ee]";
  const txt      = dark ? "text-gray-100" : "text-gray-800";
  const muted    = dark ? "text-gray-400" : "text-gray-500";

  // Burbuja: card con fondo sólido, sombra suave y bordes redondeados grandes
  const bubble   = dark
    ? "bg-[#161b22] border border-white/8 shadow-xl shadow-black/30 rounded-3xl"
    : "bg-white border border-gray-200/70 shadow-lg shadow-gray-200/60 rounded-3xl";

  const cardHov  = "hover:shadow-2xl hover:-translate-y-1 transition-all duration-300";

  const navBg = dark
    ? scrolled ? "bg-[#0d1117]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
    : scrolled ? "bg-white/85 backdrop-blur-md border-b border-gray-200/60" : "bg-transparent";

  const inputCls = `w-full px-4 py-3 rounded-2xl text-sm outline-none transition border focus:border-emerald-500 ${
    dark ? "bg-white/5 border-white/10 text-gray-100 placeholder:text-gray-500"
         : "bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400"
  }`;

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsgSent(true);
    setForm({ nombre: "", correo: "", mensaje: "" });
    setTimeout(() => setMsgSent(false), 4000);
  };

  return (
    <div className={`min-h-screen ${pageBg} ${txt} transition-colors duration-300`}>

      {/* ── NAVBAR ────────────────────────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tight text-emerald-500 text-lg select-none">
            Santiago<span className={dark ? "text-gray-100" : "text-gray-800"}> Morales</span>
          </span>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, id }) => (
              <button key={id} onClick={() => go(id)}
                className={`text-sm font-medium hover:text-emerald-500 transition-colors ${muted}`}>
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setFontLevel(l => Math.max(0, l - 1))}
              className={`hidden sm:flex w-8 h-8 rounded-xl items-center justify-center text-xs font-bold transition hover:scale-105 ${dark ? "bg-white/10 hover:bg-white/20" : "bg-black/5 hover:bg-black/10"}`}>
              A-
            </button>
            <button onClick={() => setFontLevel(l => Math.min(2, l + 1))}
              className={`hidden sm:flex w-8 h-8 rounded-xl items-center justify-center text-xs font-bold transition hover:scale-105 ${dark ? "bg-white/10 hover:bg-white/20" : "bg-black/5 hover:bg-black/10"}`}>
              A+
            </button>
            <button onClick={() => setDark(d => !d)}
              className="w-8 h-8 rounded-xl flex items-center justify-center transition hover:scale-105 bg-emerald-500 hover:bg-emerald-600 text-white text-sm">
              {dark ? "☀" : "☾"}
            </button>
            <button onClick={() => setMenuOpen(o => !o)}
              className={`md:hidden w-8 h-8 rounded-xl flex flex-col items-center justify-center gap-1.5 ${dark ? "bg-white/10" : "bg-black/5"}`}>
              <span className={`block w-4 h-0.5 transition-all ${dark ? "bg-gray-300" : "bg-gray-600"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-4 h-0.5 transition-all ${dark ? "bg-gray-300" : "bg-gray-600"} ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-4 h-0.5 transition-all ${dark ? "bg-gray-300" : "bg-gray-600"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={`md:hidden px-6 pb-4 flex flex-col gap-3 border-t ${dark ? "bg-[#0d1117] border-white/5" : "bg-white border-gray-100"}`}>
            {NAV_LINKS.map(({ label, id }) => (
              <button key={id} onClick={() => go(id)}
                className={`text-left text-sm font-medium py-1 hover:text-emerald-500 transition-colors ${muted}`}>
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section id="inicio" className={`min-h-screen flex items-center pt-16 ${
        dark ? "bg-gradient-to-br from-[#0d1117] via-[#111820] to-[#0d1117]"
             : "bg-gradient-to-br from-[#e8f5ec] via-[#eef2ee] to-[#e4efe8]"
      }`}>
        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Disponible para proyectos
            </div>
            <h1 className="text-[3.5em] md:text-[4em] font-bold leading-tight tracking-tight">
              Santiago<br />
              <span className="text-emerald-500">Morales</span> Mora
            </h1>
            <p className={`leading-relaxed max-w-md ${muted}`}>
              Estudiante de Ingeniería de Sistemas en séptimo semestre.
              Apasionado por el desarrollo web y la construcción de soluciones digitales.
            </p>
            <div className="flex gap-3 flex-wrap pt-2">
              <button onClick={() => go("proyectos")}
                className="px-6 py-3 rounded-2xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 hover:scale-105 transition-all duration-200 shadow-lg shadow-emerald-500/25">
                Ver proyectos
              </button>
              <button onClick={() => go("contactame")}
                className={`px-6 py-3 rounded-2xl font-medium border transition-all duration-200 hover:scale-105 ${
                  dark ? "border-white/15 hover:bg-white/5" : "border-gray-300 hover:bg-white"
                }`}>
                Contáctame
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 blur-3xl opacity-20 scale-125" />
              <div className={`relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 shadow-2xl ${
                dark ? "ring-white/10" : "ring-emerald-200"
              }`}>
                <Image src="/SANTIAGO.jpg" alt="Santiago Morales Mora" fill className="object-cover" priority />
              </div>
              <div className={`absolute -bottom-3 -left-6 px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg ${
                dark ? "bg-[#161b22] border border-white/10" : "bg-white border border-gray-200"
              }`}>🎓 7mo semestre</div>
              <div className={`absolute -top-3 -right-6 px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg ${
                dark ? "bg-[#161b22] border border-white/10" : "bg-white border border-gray-200"
              }`}>💻 Dev web</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE MÍ + DATOS PERSONALES ───────────────────────────────────────── */}
      <section id="sobre-mi" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`${bubble} p-8 md:p-10`}>
            <Label>Sobre mí</Label>
            <h2 className="text-[2em] font-bold mt-2 mb-5 leading-snug">Un poco de quién soy y qué hago</h2>
            <p className={`leading-relaxed max-w-3xl ${muted}`}>
              Soy estudiante de Ingeniería de Sistemas de séptimo semestre en la Universidad de Ibagué.
              Me considero una persona proactiva, responsable y con habilidades para el trabajo en equipo.
              Tengo conocimientos en desarrollo de software, estructuras de datos y desarrollo web,
              y estoy en constante aprendizaje para fortalecer mis competencias profesionales.
            </p>

            {/* Separador */}
            <div className={`my-8 border-t ${dark ? "border-white/8" : "border-gray-100"}`} />

            {/* Datos personales debajo */}
            <Label>Datos personales</Label>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
              {([
                ["Identificación",      "C.C 1077226660"],
                ["Fecha de nacimiento", "01 / 04 / 2006"],
                ["Ciudad",              "Ibagué, Tolima"],
                ["Dirección",           "Cra 7 Bis #129-115 — Santa Ana"],
                ["Correo",              "santiagomoralesmora32@gmail.com"],
                ["Teléfono",            "304 536 7588"],
              ] as [string, string][]).map(([label, value]) => (
                <div key={label} className={`flex items-start justify-between gap-4 py-3 border-b ${
                  dark ? "border-white/6" : "border-gray-100"
                }`}>
                  <span className={`text-sm shrink-0 ${muted}`}>{label}</span>
                  <span className="text-sm font-medium text-right break-all">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCIA + EDUCACIÓN ───────────────────────────────────────────── */}
      <section id="experiencia" className="py-6 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          {/* Experiencia */}
          <div className={`${bubble} p-8`}>
            <Label>Trayectoria</Label>
            <h2 className="text-[1.6em] font-bold mt-2 mb-7">Experiencia</h2>
            <div className="relative pl-6 border-l-2 border-emerald-500/30">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500">2020</span>
              <h3 className="font-semibold text-base mt-2">Agente Publicitario</h3>
              <p className={`text-sm mt-1 leading-relaxed ${muted}`}>
                Monitoreo y envío de publicidad para un servicio de enfermería a domicilio.
                Gestión de agenda de contactos y fidelización de clientes.
              </p>
            </div>
          </div>

          {/* Educación */}
          <div className={`${bubble} p-8`}>
            <Label>Formación</Label>
            <h2 className="text-[1.6em] font-bold mt-2 mb-7">Educación</h2>
            <div className="relative pl-6 border-l-2 border-emerald-500/30 space-y-7">
              {EDUCACION.map((e, i) => (
                <div key={i} className="relative pl-5">
                  {/* punto pegado a la línea, no al texto */}
                  <div className={`absolute -left-[9px] top-[6px] w-4 h-4 rounded-full ${
                    e.activo ? "bg-emerald-500 ring-4 ring-emerald-500/20"
                             : dark ? "bg-gray-600 ring-4 ring-gray-600/20" : "bg-gray-300 ring-4 ring-gray-300/30"
                  }`} />
                  <p className={`text-xs font-medium ${muted}`}>{e.periodo}</p>
                  <h3 className="font-semibold text-sm mt-0.5">{e.titulo}</h3>
                  <p className={`text-xs mt-0.5 ${muted}`}>{e.lugar}</p>
                  {e.activo && (
                    <span className="inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-medium">
                      En curso
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HABILIDADES ───────────────────────────────────────────────────────── */}
      <section className="py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`${bubble} p-8 md:p-10`}>
            <div className="text-center mb-8">
              <Label center>Competencias</Label>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {SKILLS.map((s) => (
                <span key={s} className="px-5 py-2 rounded-full text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 hover:scale-105 transition-all duration-200 cursor-default shadow-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ─────────────────────────────────────────────────────────── */}
      <section id="proyectos" className="py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`${bubble} p-8 md:p-10`}>
            <div className="text-center mb-8">
              <Label center>Portafolio</Label>
              <h2 className="text-[1.6em] font-bold mt-2">Proyectos destacados</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {PROYECTOS.map((p, i) => (
                <div key={i} className={`rounded-2xl p-6 cursor-default group ${cardHov} ${
                  dark ? "bg-white/4 border border-white/8" : "bg-gray-50 border border-gray-100"
                }`}>
                  <div className={`h-24 rounded-xl mb-4 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                    <span className="text-4xl font-black text-emerald-500/25 group-hover:text-emerald-500/55 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm leading-snug mb-2">{p.titulo}</h3>
                  <p className={`text-xs leading-relaxed mb-3 ${muted}`}>{p.descripcion}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className={`text-xs px-2 py-0.5 rounded-lg font-medium ${
                        dark ? "bg-white/10 text-gray-300" : "bg-white text-gray-600 border border-gray-200"
                      }`}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REFERENCIAS ───────────────────────────────────────────────────────── */}
      <section className="py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`${bubble} p-8 md:p-10`}>
            <div className="text-center mb-8">
              <Label center>Red de contacto</Label>
              <h2 className="text-[1.6em] font-bold mt-2">Referencias</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {REFERENCIAS.map((r) => (
                <div key={r.nombre} className={`flex items-center gap-4 p-5 rounded-2xl ${cardHov} ${
                  dark ? "bg-white/4 border border-white/8" : "bg-gray-50 border border-gray-100"
                }`}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {r.inicial}
                  </div>
                  <div>
                    <p className="font-semibold">{r.nombre}</p>
                    <p className={`text-sm ${muted}`}>{r.cargo}</p>
                    <p className={`text-sm mt-0.5 ${muted}`}>{r.tel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTÁCTAME ────────────────────────────────────────────────────────── */}
      <section id="contactame" className="py-6 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className={`${bubble} p-8 md:p-10 grid md:grid-cols-2 gap-12 items-start`}>

            {/* Info */}
            <div>
              <Label>¿Hablamos?</Label>
              <h2 className="text-[1.6em] font-bold mt-2 mb-4">Contáctame</h2>
              <p className={`leading-relaxed mb-8 text-sm ${muted}`}>
                Si tienes alguna propuesta, proyecto o requieres mayor información sobre mi portafolio, déjame un mensaje y estaremos en contacto.
              </p>
              <div className="space-y-4">
                {([
                  ["✉️", "Correo",   "santiagomoralesmora32@gmail.com"],
                  ["📞", "Teléfono", "304 536 7588"],
                  ["📍", "Ciudad",   "Ibagué, Tolima"],
                ] as [string, string, string][]).map(([icon, label, value]) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-lg shrink-0 ${
                      dark ? "bg-white/8" : "bg-emerald-50 border border-emerald-100"
                    }`}>{icon}</div>
                    <div>
                      <p className={`text-xs ${muted}`}>{label}</p>
                      <p className="text-sm font-medium break-all">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulario */}
            <div>
              {msgSent ? (
                <div className={`rounded-2xl p-8 text-center ${dark ? "bg-white/5 border border-white/8" : "bg-gray-50 border border-gray-100"}`}>
                  <div className="text-4xl mb-3">✅</div>
                  <p className="font-semibold text-lg">¡Mensaje enviado!</p>
                  <p className={`text-sm mt-1 ${muted}`}>Gracias por escribirme, te responderé pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${muted}`}>Nombre</label>
                    <input type="text" required placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                      className={inputCls} />
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${muted}`}>Correo electrónico</label>
                    <input type="email" required placeholder="tucorreo@ejemplo.com"
                      value={form.correo}
                      onChange={e => setForm(f => ({ ...f, correo: e.target.value }))}
                      className={inputCls} />
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${muted}`}>Mensaje</label>
                    <textarea required rows={4} placeholder="Escribe tu mensaje aquí..."
                      value={form.mensaje}
                      onChange={e => setForm(f => ({ ...f, mensaje: e.target.value }))}
                      className={`${inputCls} resize-none`} />
                  </div>
                  <button type="submit"
                    className="w-full py-3 rounded-2xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-emerald-500/20">
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer className={`py-8 border-t ${dark ? "border-white/5" : "border-gray-200"}`}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-bold text-emerald-500">Santiago <span className={dark ? "text-gray-100" : "text-gray-800"}>Morales</span></span>
          <p className={`text-sm ${muted}`}>© 2026 · Santiago Morales Mora · Ibagué, Colombia</p>
          <div className="flex gap-4">
            {NAV_LINKS.map(({ label, id }) => (
              <button key={id} onClick={() => go(id)}
                className={`text-xs hover:text-emerald-500 transition-colors ${muted}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}

function Label({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-widest text-emerald-500 ${center ? "text-center" : ""}`}>
      {children}
    </p>
  );
}
