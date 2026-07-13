import SectionTitle from "../ui/SectionTitle";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 w-full flex flex-col items-center justify-center">

      {/* Contenedor principal centrado con flex-col e items-center */}
      <div className="w-full max-w-4xl mx-auto text-center px-4 flex flex-col items-center">

        <SectionTitle>Contacto</SectionTitle>
        <br />

        {/* mt-8 reemplaza el <br /> superior de manera limpia */}
        <p className="text-slate-300 leading-relaxed text-lg md:text-xl mt-8 mb-16 max-w-2xl text-center">
          Si querés conocer más sobre mi trabajo o considerás que puedo aportar a tu equipo, no dudes en contactarme.
        </p>

        {/* Contenedor de botones alineado y centrado */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full sm:w-auto mx-auto">

          {/* Botón de Email ya vinculado */}
          <a
            href="mailto:juancruzmanzo9@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 !px-10 !py-4 text-xl font-bold rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:scale-105 text-center"
          >
            <FaEnvelope size={24} />
            <span>Email</span>
          </a>

          {/* Botón de GitHub */}
          <a
            href="https://github.com/JuanCruzManzo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 !px-10 !py-4 text-xl font-bold rounded-xl border-2 border-slate-600 text-white hover:border-cyan-500 hover:bg-slate-800/30 transition-all duration-300 hover:scale-105 text-center"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>

          {/* Botón de LinkedIn ya vinculado */}
          <a
            href="https://www.linkedin.com/in/juan-cruz-manzo-1953b9364/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 !px-10 !py-4 text-xl font-bold rounded-xl border-2 border-slate-600 text-white hover:border-cyan-500 hover:bg-slate-800/30 transition-all duration-300 hover:scale-105 text-center"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>

        </div>

      </div>

    </section>
  );
}