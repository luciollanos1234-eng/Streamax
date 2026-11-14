 import { NavLink } from "react-router";
import Logo from "../../assets/Logo_para_Streamax.png";

const Navbar = () => {
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
            <input
              type="search"
              placeholder="Buscar peliculas..."
              aria-label="Buscar peliculas"
              className="w-60 rounded-md bg-gray-800 px-3 py-2  text-amber-50"
            />
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
