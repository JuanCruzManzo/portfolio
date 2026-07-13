import SectionTitle from "../ui/SectionTitle";
import { FaGithub } from "react-icons/fa";

const projects = [
{
  title: "Sistema para la Defensoría del Pueblo",
  type: "Proyecto Profesional",
  description:
    "Participé en el desarrollo de un sistema para la Defensoría del Pueblo de Mar del Plata, colaborando principalmente en el backend y en el manejo de bases de datos dentro de un proyecto real.",
  technologies: ["PHP", "SQL", "JavaScript", "HTML", "CSS"],
  github: "https://github.com/JuanCruzManzo/backDefensoria",
},
  {
    title: "Sistema de Gestión de Calificaciones",
    type: "Proyecto Académico",
    description:
      "Aplicación web desarrollada durante la carrera para gestionar alumnos, materias y calificaciones. Incluye autenticación y operaciones CRUD.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/RenzoAversa/Seminario",
  },
  {
    title: "Movie Reviews",
    type: "Proyecto Académico",
    description:
      "Aplicación Full Stack desarrollada con React y .NET donde los usuarios pueden registrarse, iniciar sesión, calificar películas y publicar reseñas.",
    technologies: ["React", ".NET", "SQL Server", "JWT"],
    frontend: "https://github.com/JuanCruzManzo/FrontendRese",
    backend: "https://github.com/JuanCruzManzo/BackendRese",
  },
];

export default function Projects() {
  return (
    <section id="projects">

      <div className="container">

        <SectionTitle>Proyectos</SectionTitle>
        <br />

        <div className="flex flex-col gap-10">

          {projects.map((project) => (

            <article
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 hover:border-cyan-500 transition-all duration-300"
            >

              <span className="text-cyan-400 text-sm font-medium">

                {project.type}

              </span>

              <h3 className="text-2xl font-bold mt-3">

                {project.title}

              </h3>

              <p className="text-slate-300 leading-8 mt-5">

                {project.description}

              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex flex-wrap gap-4 mt-8">

              {"frontend" in project ? (
  <>
    <a
      href={project.backend}
      target="_blank"
      className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg transition"
    >
      <FaGithub />
      Backend
    </a>

    <a
      href={project.frontend}
      target="_blank"
      className="flex items-center gap-2 border border-slate-600 hover:border-cyan-500 px-5 py-3 rounded-lg transition"
    >
      <FaGithub />
      Frontend
    </a>
  </>
) : (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg transition"
                  >
                    <FaGithub />
                    Ver repositorio
                  </a>
                )}

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}