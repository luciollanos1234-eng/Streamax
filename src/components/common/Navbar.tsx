import { NavLink } from "react-router";
import Logo from "../../assets/Logo_para_Streamax.png";

const Navbar = () => {
  return (
    <header className="bg-black">
      <nav>
        <div className="flex items-center gap-4 ml-2">
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
      </nav>
    </header>
  );
};

export default Navbar;
