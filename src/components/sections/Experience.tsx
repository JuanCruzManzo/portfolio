import SectionTitle from "../ui/SectionTitle";

const experience = [
  {
    title: "Proyecto Freelance — Sistema de Gestión Comercial",
    company: "Desarrollo Independiente",
    date: "Actualidad",
    description:
      "Diseño y construcción integral de una aplicación para optimizar procesos comerciales. Implementación de una arquitectura limpia en el backend y una interfaz de usuario dinámica y responsiva.",
    tech: [".NET", "SQL Server", "React", "Tailwind CSS"],
  },
  {
    title: "Desarrollador de Software (Práctica)",
    company: "Defensoría del Pueblo",
    date: "2025",
    description:
      "Participación activa en el ciclo de vida del desarrollo de un sistema interno. Colaboración directa en el diseño de bases de datos relacionales, optimización de consultas SQL y lógica del lado del servidor.",
    tech: ["PHP", "SQL", "JavaScript", "PhpMyAdmin"],
  },
  {
    title: "Analista de Sistemas de Información",
    company: "Formación Profesional Graduado",
    date: "2026",
    description:
      "Sólida base académica especializada en ingeniería de software, modelado de bases de datos, administración de redes y gestión de proyectos utilizando metodologías ágiles (Scrum).",
    tech: ["Ing. de Software", "Bases de Datos", "Metodologías Ágiles"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 w-full flex flex-col items-center justify-center">
      
      {/* max-w-4xl mx-auto para controlar el ancho exacto y centrar la estructura */}
      <div className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
        
        <SectionTitle>Experiencia</SectionTitle>
        <br />
        <br />
        {/* mt-16 da un espacio gigante después del título principal */}
        <div className="relative border-l-2 border-slate-800 pl-8 space-y-16 mt-16 w-full text-left">
          
          {experience.map((item) => (
            <div key={item.title} className="relative group">
              
              {/* Puntito de la línea de tiempo que se ilumina con hover */}
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:border-cyan-400 group-hover:bg-cyan-500 transition-all duration-300" />

              {/* Encabezado del bloque */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-cyan-500/80 font-medium text-sm md:text-base mt-1">
                    {item.company}
                  </p>
                </div>
                
                {/* Badge de fecha con estilo moderno */}
                <span className="text-sm font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 sm:self-start whitespace-nowrap">
                  {item.date}
                </span>
              </div>

              {/* Descripción con buen interlineado y color suave */}
              <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-6 max-w-3xl">
                {item.description}
              </p>

              {/* Contenedor de Badges de Tecnologías para darle nivel visual */}
              <div className="flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span 
                    key={t} 
                    className="text-xs font-medium px-3 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}