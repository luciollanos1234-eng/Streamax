import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { IoSearch } from "react-icons/io5";
import Logo from "../../assets/Logo_para_Streamax.png";
import {
  AUTH_CHANGE_EVENT,
  getCurrentUser,
  setCurrentUser,
} from "../../services/storageService";

const Navbar = () => {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  const [usuario, setUsuario] = useState(getCurrentUser());

  useEffect(() => {
    const syncUser = () => setUsuario(getCurrentUser());
    window.addEventListener("storage", syncUser);
    window.addEventListener(AUTH_CHANGE_EVENT, syncUser);
    return () => {
      window.removeEventListener("storage", syncUser);
      window.removeEventListener(AUTH_CHANGE_EVENT, syncUser);
    };
  }, []);

  const cerrarSesion = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <header className="bg-black">
      <nav>
        <div className="ml-auto flex items-center justify-between p-3">
          <div className="flex items-center gap-6">
            <NavLink to="/">
              <img src={Logo} alt="Streamax" className="h-15 scale-150" />
            </NavLink>
            <NavLink to="/" className="text-amber-50">
              Inicio
            </NavLink>
            <NavLink to="/" className="text-amber-50">
              Explorar
            </NavLink>
            <NavLink to="/" className="text-amber-50">
              Mi lista
            </NavLink>
            <NavLink to="/planes" className="text-amber-50">
              Planes
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
            {usuario ? (
              <>
                <span className="me-2 max-w-48 truncate text-sm text-slate-600 dark:text-slate-300">
                  Hola "{usuario.name}"
                </span>
                <button
                  type="button"
                  className="w-max text-slate-700 hover:text-blue-600 dark:text-slate-200"
                  onClick={cerrarSesion}
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <NavLink to="/Login" className="text-amber-50">
                  Iniciar sesión
                </NavLink>
                <NavLink to="/Register" className="text-amber-50">
                  Registrarse
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
