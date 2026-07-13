import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
      
      {/* Usamos w-full con px para que se adapte sin romper o pisar las secciones de abajo */}
      <div className="w-full h-16 flex items-center justify-between px-6 md:px-16">
        
        {/* Tu nombre */}
        <h1 className="font-bold text-xl text-white tracking-tight">
          Juan Cruz Manzo
        </h1>

        {/* Menú de navegación */}
        <nav className="hidden md:flex gap-8">
          <a href="#hero" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-300">
            Sobre mí
          </a>
          <a href="#experience" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-300">
            Experiencia
          </a>
          <a href="#skills" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-300">
            Tecnologías
          </a>
          <a href="#contact" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-300">
            Contacto
          </a>
        </nav>

        {/* Redes sociales */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/JuanCruzManzo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/juan-cruz-manzo-1953b9364/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

      </div>

    </header>
  );
}