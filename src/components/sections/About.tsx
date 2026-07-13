import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-28 w-full flex flex-col items-center justify-center">
      
      {/* Centrado absoluto alineado con el resto de las secciones */}
      <div className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center">

        <SectionTitle>Sobre mí</SectionTitle>

        {/* mt-16 separa de forma contundente el bloque de texto del título */}
        {/* space-y-8 genera un aire limpio entre cada uno de los párrafos */}
        <div className="space-y-8 text-slate-300 leading-relaxed text-lg md:text-xl text-center max-w-3xl mt-16">

          <p>
            Soy Analista de Sistemas y actualmente estoy buscando mi primera
            oportunidad profesional en IT. Me apasiona el desarrollo backend y
            disfruto crear soluciones que resuelvan problemas reales.
          </p>

          <p>
            Durante mi formación participé en proyectos académicos y también en
            un proyecto para la Defensoría del Pueblo de Mar del Plata, donde
            pude trabajar con tecnologías backend y bases de datos en un entorno
            de desarrollo real.
          </p>

          <p>
            Actualmente continúo capacitándome de forma autodidacta mientras
            desarrollo una aplicación para un cliente utilizando .NET, SQL
            Server y React, aplicando buenas prácticas de desarrollo y control
            de versiones con Git.
          </p>

        </div>

      </div>
    </section>
  );
}