import Logo from "../../assets/Logo";
import NavbarDropdown from "./NavbarDropdown";
import { NavLink } from "react-router-dom";
import NavbarUserActions from "./NavbarUserActions";

function Navbar() {
  return (
    <div className="w-full bg-black text-gray-300 fixed shadow-xl shadow-[#ffffff17] z-10">
      <nav className="px-10 py-3 flex justify-between items-center mx-auto xl:max-w-[1400px]">
        <NavLink to="/">
          <Logo className="w-16 h-16 p-0 object-cover fill-white" />
        </NavLink>
        <ul className="hidden md:flex gap-8">
          <li>
            <NavLink className="nav-link font-semibold hover:text-white transition-colors" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link font-semibold hover:text-white transition-colors" to="/explore">
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link font-semibold hover:text-white transition-colors" to="/our-team">
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link font-semibold hover:text-white transition-colors" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link font-semibold hover:text-white transition-colors" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <NavbarUserActions />
        <NavbarDropdown />
      </nav>
    </div>
  );
}

export default Navbar;
