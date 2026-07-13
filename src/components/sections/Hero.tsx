import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[85vh] w-full flex flex-col items-center justify-center px-4"
    >
      <div className="w-full max-w-3xl flex flex-col items-center text-center">

        <span className="text-cyan-400 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold block mb-8">
          Analista de Sistemas
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 w-full text-center">
          Juan Cruz Manzo
        </h1>

        <h2 className="text-lg md:text-xl lg:text-2xl text-slate-400 font-medium mb-16 w-full text-center">
          Backend Developer <span className="text-cyan-500/50">·</span> .NET <span className="text-cyan-500/50">·</span> SQL Server <span className="text-cyan-500/50">·</span> React
        </h2>
        <br />

       
        <p className="max-w-2xl text-slate-300 leading-relaxed text-base md:text-lg lg:text-xl mb-20 text-center">
          Recién graduado como Analista de Sistemas, apasionado por el desarrollo
          backend y la creación de software que resuelva problemas reales.
          Actualmente desarrollo proyectos con .NET, SQL Server y React mientras
          continúo ampliando mis conocimientos y experiencia.
        </p>
        <br />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full sm:w-auto mt-8">
          <Button 
            href="#projects"
            variant="primary"
            className="w-full sm:w-auto !px-14 !py-5 !text-xl font-bold rounded-xl shadow-lg shadow-cyan-500/10 transition-transform hover:scale-105"
          >
            Ver proyectos
          </Button>

          <Button
            href="#contact"
            variant="secondary"
            className="w-full sm:w-auto !px-14 !py-5 !text-xl font-bold rounded-xl transition-transform hover:scale-105"
          >
            Contacto
          </Button>
        </div>

      </div>
    </section>
  );
}