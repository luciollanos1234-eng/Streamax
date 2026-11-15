
import { NavLink } from "react-router";
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

import Logo from "../../assets/Logo_para_Streamax.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800 bg-[#101014] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
        <div className="flex flex-col gap-3">
          <NavLink to={"/"} className="w-fit">
            <img
              src={Logo}
              alt="Streamax"
              className="h-15 w-auto object-contain"
            />
          </NavLink>
          <p className="max-w-md text-sm leading-relaxed text-text-secondary">
            Tu plataforma definitiva de streaming en ultra alta
            definición 4K HDR y sonido cinematográfico inmersivo.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold tracking-wide">
            EXPLORAR
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <NavLink to={"/error404"} className="transition hover:text-blue-400">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to={"/error404"} className="transition hover:text-blue-400">
                Explorar
              </NavLink>
            </li>
            <li>
              <NavLink to={"/error404"} className="transition hover:text-blue-400">
                Mi Lista
              </NavLink>
            </li>
            <li>
              <NavLink to={"/error404"} className="transition hover:text-blue-400">
                Novedades
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold tracking-wide">
            CUENTA / PLANES
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <NavLink to={"/error404"} className="transition hover:text-blue-400">
                Planes y Tarifas
              </NavLink>
            </li>
            <li>
              <NavLink to={"/error404"} className="transition hover:text-blue-400">
                Canjear Código
              </NavLink>
            </li>
            <li>
              <NavLink to={"/error404"} className="transition hover:text-blue-400">
                Métodos de Pago
              </NavLink>
            </li>
            <li>
              <NavLink to={"/error404"} className="transition hover:text-blue-400">
                Configuración
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold tracking-wide">
            LEGAL & SOPORTE
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <NavLink to={"/error404"} className="transition hover:text-blue-400">
                Términos de Uso
              </NavLink>
            </li>
            <li>
              <NavLink to={"/error404"} className="transition hover:text-blue-400">
                Privacidad
              </NavLink>
            </li>
            <li>
              <NavLink to={"/error404"} className="transition hover:text-blue-400">
                Centro de Ayuda
              </NavLink>
            </li>
            <li>
              <NavLink to={"/error404"} className="transition hover:text-blue-400">
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-gray-800 px-6 py-5 sm:flex-row">
        <p className="text-center text-xs font-medium text-gray-500 sm:text-left">
          © 2025 Streamax. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:academy@rollingcodeschool.com"
            aria-label="Email"
            title="Email"
            className="text-gray-400 transition hover:text-blue-400"
          >
            <FaEnvelope size={19} />
          </a>
          <a
            href="https://wa.me/5493815783030"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="text-gray-400 transition hover:text-green-500"
          >
            <FaWhatsapp size={19} />
          </a>
          <a
            href="https://www.instagram.com/rollingcodeschool/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="text-gray-400 transition hover:text-pink-500"
          >
            <FaInstagram size={19} />
          </a>
          <a
            href="https://www.facebook.com/RollingCodeSchool"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
            className="text-gray-400 transition hover:text-blue-500"
          >
            <FaFacebook size={19} />
          </a>
          <a
            href="https://www.linkedin.com/school/rollingcodeschool/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="text-gray-400 transition hover:text-blue-400"
          >
            <FaLinkedin size={19} />
          </a>
          <a
            href="https://www.youtube.com/@rollingcode7175"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="YouTube"
            className="text-gray-400 transition hover:text-red-500"
          >
            <FaYoutube size={19} />
          </a>
          <a
            href="https://github.com/luciollanos1234-eng/Streamax"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub del proyecto"
            className="text-gray-400 transition hover:text-white"
          >
            <FaGithub size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
