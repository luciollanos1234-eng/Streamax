import { useState } from "react";
import { NavLink } from "react-router";
import Logo from "../../assets/Logo_para_Streamax.png";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [busqueda, setBusqueda] = useState("");

  return (
    <header className="bg-black">
      <nav>
        <div className="ml-auto flex items-center justify-between p-3">
          <div className="flex items-center gap-6">
            <NavLink to={"/"}>
              <img src={Logo} alt="Streamax" className="h-15" />
            </NavLink>
            <NavLink to={"/"} className="text-amber-50">
              inicio
            </NavLink>
            <NavLink to={""} className="text-amber-50">
              Explorar
            </NavLink>
            <NavLink to={""} className="text-amber-50">
              Mi lista
            </NavLink>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              {busqueda === "" && (
                <IoSearch
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              )}
              <input
                type="search"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar peliculas..."
                aria-label="Buscar peliculas"
                className="w-60 rounded-md bg-gray-800 py-2 pl-10 pr-3 text-amber-50"
              />
            </div>
            <NavLink to={"/Login"} className="text-amber-50">
              Iniciar sesion
            </NavLink>
            <NavLink to={"/Register"} className="text-amber-50">
              Registrarse
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
