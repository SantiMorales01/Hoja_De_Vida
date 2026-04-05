"use client";

import { useState } from "react";

export default function Home() {
  const proyectos = [
    {
      titulo: "Sistema de grafos en Java",
      descripcion: "Implementación de estructuras de datos y algoritmos."
    },
    {
      titulo: "Aplicaciones web",
      descripcion: "Desarrollo de interfaces usando HTML, CSS y JavaScript."
    },
    {
      titulo: "Proyectos académicos",
      descripcion: "Aplicación de conceptos de programación y lógica computacional."
    }
  ];

  const [index, setIndex] = useState(0);

  return (
    <main className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        {/* HEADER */}
        <div className="text-center">
          <img
            src="/SANTIAGO.jpg"
            className="w-28 h-28 rounded-full mx-auto mb-3 border-2 border-blue-500 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-900">
            Santiago Morales Mora
          </h1>
          <p className="text-gray-700 mt-2">
            Estudiante de Ingeniería de Sistemas - Séptimo semestre
          </p>
        </div>

        {/* PERFIL */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
            Perfil Profesional
          </h2>
          <p className="mt-3 text-gray-800 leading-relaxed">
            Estudiante de Ingeniería de Sistemas con formación en desarrollo de software,
            actualmente cursando séptimo semestre en la Universidad de Ibagué. Se caracteriza
            por ser una persona proactiva, con habilidades en trabajo en equipo, comunicación
            efectiva y capacidad de adaptación a nuevos entornos tecnológicos.
          </p>
        </section>

        {/* DATOS */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
            Datos Personales
          </h2>
          <div className="mt-3 text-gray-800 space-y-1">
            <p><strong>Identificación:</strong> C.C 1077226660</p>
            <p><strong>Ciudad:</strong> Ibagué, Tolima</p>
            <p><strong>Dirección:</strong> Calle 38 #3B-16 - Los Mártires</p>
            <p><strong>Email:</strong> santiagomoralesmora32@gmail.com</p>
            <p><strong>Teléfono:</strong> 304 536 7588</p>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
            Experiencia
          </h2>
          <ul className="mt-3 text-gray-800 space-y-2">
            <li>
              • <strong>Agente Publicitario (2020)</strong><br />
              Encargado de monitorear y enviar publicidad en un servicio de enfermería a domicilio.
              Responsable de la gestión de agenda de contactos y fidelización de clientes.
            </li>
          </ul>
        </section>

        {/* EDUCACIÓN */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
            Educación
          </h2>
          <ul className="mt-3 text-gray-800 space-y-2">
            <li>• Ingeniería de Sistemas (En curso) - Universidad de Ibagué</li>
            <li>• Técnico en Diseño e Integración de Multimedia - SENA</li>
            <li>• Bachillerato - Institución Educativa Leonidas Rubio Villegas</li>
          </ul>
        </section>

        {/* HABILIDADES */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
            Habilidades
          </h2>
          <div className="flex flex-wrap gap-3 mt-3">
            {[
              "Trabajo en equipo",
              "Comunicación",
              "Proactividad",
              "Gestión del tiempo",
              "Atención al cliente",
              "Flexibilidad"
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* REFERENCIAS */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
            Referencias
          </h2>
          <div className="mt-3 text-gray-800 space-y-1">
            <p><strong>Andrés Morales:</strong> 323 284 7716</p>
            <p><strong>Yeferson Gasca:</strong> 318 866 7940</p>
          </div>
        </section>

        {/* PROYECTOS */}
        <section className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
            Proyectos
          </h2>

          <div className="mt-6 p-6 bg-gray-300 rounded-xl shadow text-gray-900">
            <h3 className="text-xl font-bold">{proyectos[index].titulo}</h3>
            <p className="mt-2">{proyectos[index].descripcion}</p>
          </div>

          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={() => setIndex((index - 1 + proyectos.length) % proyectos.length)}
              className="bg-gray-500 px-4 py-2 rounded text-white"
            >
              ⬅
            </button>
            <button
              onClick={() => setIndex((index + 1) % proyectos.length)}
              className="bg-blue-600 px-4 py-2 rounded text-white"
            >
              ➡
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <div className="mt-10 text-center text-gray-600 text-sm">
          © 2026 - Santiago Morales Mora
        </div>

      </div>
    </main>
  );
}