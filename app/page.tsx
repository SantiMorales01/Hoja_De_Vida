"use client";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  const proyectos = [
    {
      titulo: "Plataforma web para gestión de supermercado",
      descripcion:
        "Desarrollo de una plataforma web orientada a la gestión de compra y venta de productos en un supermercado, permitiendo el control de inventario y organización de productos.",
    },
    {
      titulo: "Aplicaciones web",
      descripcion:
        "Desarrollo de interfaces usando HTML, CSS y JavaScript.",
    },
    {
      titulo: "Proyectos académicos",
      descripcion:
        "Aplicación de conceptos de programación y lógica computacional.",
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <main
      style={{ fontSize: `${fontSize}rem` }}
      className={`min-h-screen p-6 transition ${darkMode
        ? "bg-gray-900"
        : "bg-gradient-to-br from-gray-200 via-green-100 to-gray-300"
        }`}
    >
      <div
        className={`max-w-5xl mx-auto rounded-2xl p-8 shadow-xl transition ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
      >
        {/* BOTÓN MODO OSCURO */}
        <div className="flex justify-end items-center gap-4 mb-6 mt-2 flex-wrap">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg 
            transition transform hover:scale-110 hover:bg-emerald-700"
          >
            {darkMode ? "Modo Claro" : "Modo Oscuro"}
          </button>

          {/* DISMINUIR LETRA */}
          <button
            onClick={() => setFontSize((prev) => Math.max(0.95, prev - 0.05))}
            className="bg-gray-600 text-white px-3 py-2 rounded-lg 
            transition transform hover:scale-110 hover:bg-gray-600"
          >
            A-
          </button>

          {/* AUMENTAR LETRA */}
          <button
            onClick={() => setFontSize((prev) => Math.min(1.1, prev + 0.05))}
            className="bg-gray-700 text-white px-3 py-2 rounded-lg 
            transition transform hover:scale-110 hover:bg-gray-800"
          >
            A+
          </button>
        </div>

        {/* HEADER */}
        <div className="text-center">
          <img
            src="/SANTIAGO.jpg"
            className="w-28 h-28 rounded-full mx-auto mb-3 border-2 border-emerald-600 object-cover"
          />
          <h1 className="text-4xl font-bold">
            Santiago Morales Mora
          </h1>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mt-2`}>
            Estudiante de Ingeniería de Sistemas - Séptimo semestre
          </p>
        </div>

        {/* PERFIL */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-emerald-600 border-b pb-2">
            Perfil Profesional
          </h2>
          <p className="mt-3 leading-relaxed">
            Soy estudiante de Ingeniería de Sistemas de séptimo semestre en la Universidad de Ibagué.
            Me considero una persona proactiva, responsable y con habilidades para el trabajo en equipo.
            Tengo conocimientos en desarrollo de software, estructuras de datos y desarrollo web,
            y estoy en constante aprendizaje para fortalecer mis competencias profesionales.
          </p>
        </section>

        {/* DATOS */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-emerald-600 border-b pb-2">
            Datos Personales
          </h2>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <p><strong>Identificación:</strong> C.C 1077226660</p>
            <p><strong>Ciudad:</strong> Ibagué, Tolima</p>

            <p><strong>Dirección:</strong> Calle 38 #3B-16 - Los Mártires</p>
            <p><strong>Fecha de nacimiento:</strong> 01/04/2006</p>

            <p><strong>Correo electrónico:</strong> santiagomoralesmora32@gmail.com</p>
            <p><strong>Teléfono:</strong> 304 536 7588</p>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-emerald-600 border-b pb-2">
            Experiencia
          </h2>
          <ul className="mt-3 space-y-2">
            <li>
              • <strong>Agente Publicitario (2020)</strong><br />
              Encargado de monitorear y enviar publicidad en un servicio de enfermería a domicilio.
              Responsable de la gestión de agenda de contactos y fidelización de clientes.
            </li>
          </ul>
        </section>

        {/* EDUCACIÓN */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-emerald-600 border-b pb-2">
            Educación
          </h2>
          <ul className="mt-3 space-y-2">
            <li>• Ingeniería de Sistemas (En curso) - Universidad de Ibagué</li>
            <li>• Técnico en Diseño e Integración de Multimedia - SENA</li>
            <li>• Bachillerato - Institución Educativa Leonidas Rubio Villegas</li>
          </ul>
        </section>

        {/* HABILIDADES */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-emerald-600 border-b pb-2">
            Habilidades
          </h2>
          <div className="flex flex-wrap gap-3 mt-3">
            {[
              "Trabajo en equipo",
              "Comunicación",
              "Proactividad",
              "Gestión del tiempo",
              "Atención al cliente",
              "Flexibilidad",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm shadow 
                transition transform hover:scale-110 hover:bg-emerald-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* REFERENCIAS */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-emerald-600 border-b pb-2">
            Referencias
          </h2>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`${darkMode ? "bg-gray-700" : "bg-gray-100"} p-4 rounded-lg shadow`}>
              <p className="font-semibold">Andrés Morales</p>
              <p>Ingeniero de Petróleos</p>
              <p>Tel: 323 284 7716</p>
            </div>

            <div className={`${darkMode ? "bg-gray-700" : "bg-gray-100"} p-4 rounded-lg shadow`}>
              <p className="font-semibold">Yeferson Gasca</p>
              <p>Empleado</p>
              <p>Tel: 318 866 7940</p>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-emerald-600 border-b pb-2">
            Proyectos
          </h2>

          <div className={`mt-6 p-6 rounded-xl shadow ${darkMode
            ? "bg-gray-700"
            : "bg-gradient-to-r from-gray-200 to-green-100"
            }`}>
            <h3 className="text-xl font-bold">
              {proyectos[index].titulo}
            </h3>
            <p className="mt-2">
              {proyectos[index].descripcion}
            </p>
          </div>

          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={() =>
                setIndex(
                  (index - 1 + proyectos.length) % proyectos.length
                )
              }
              className="bg-gray-500 px-4 py-2 rounded text-white 
              transition transform hover:scale-110 hover:bg-gray-600"
            >
              ⬅
            </button>

            <button
              onClick={() =>
                setIndex((index + 1) % proyectos.length)
              }
              className="bg-emerald-600 px-4 py-2 rounded text-white 
              transition transform hover:scale-110 hover:bg-emerald-700"
            >
              ➡
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <div className="mt-10 text-center text-sm opacity-70">
          © 2026 - Santiago Morales Mora
        </div>

      </div>
    </main>
  );
}