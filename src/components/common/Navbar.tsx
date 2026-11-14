import { NavLink } from "react-router"
import Logo from "../../assets/Logo_para_Streamax.png"


const Navbar = () => {
  return (
    <header className="bg-black">
        <nav className="flex flex-wrap items-center justify-between p-3">
            <div>
                <NavLink to={'/'}>
                <img src={Logo} alt="Streamax" className="h-15"/>
                </NavLink>
                
            </div>
        </nav>
    </header>
  )
}

export default Navbar
