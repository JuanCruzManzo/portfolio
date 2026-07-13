import SectionTitle from "../ui/SectionTitle";

const skills = [
  ".NET",
  "C#",
  "React",
  "TypeScript",
  "SQL Server",
  "Entity Framework",
  "Git",
  "GitHub",
  "REST API",
  "JWT",
  "PHP",
  "MySQL",
  "Scrum",
  "Jira",
  "Trello",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 w-full flex flex-col items-center justify-center">

      {/* Contenedor centralizado idéntico a Experiencia y Contacto */}
      <div className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center">

        <SectionTitle>Tecnologías</SectionTitle>
        <br />
        {/* mt-16 mete un espacio enorme abajo del título */}
        {/* gap-6 agranda la distancia entre cada tarjeta de tecnología */}
        <div className="flex flex-wrap justify-center gap-6 w-full mt-16">

          {skills.map((skill) => (
            <span
              key={skill}
              className="px-8 py-4 text-lg md:text-xl font-bold rounded-xl border border-slate-800 text-slate-300 bg-slate-900/60 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-950/20 transition-all duration-300 cursor-default shadow-md"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}