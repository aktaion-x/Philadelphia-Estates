import { NavLink } from "react-router-dom";
import UserProfile from "./UserProfile";
import useAuthContext from "../../hooks/useAuthContext";
import LogoutButton from "./LogoutButton";

function NavbarUserActions() {
  const { userData } = useAuthContext();
  return (
    <ul className="hidden md:flex gap-3 items-center">
      {!userData && (<>
        <li>
          <NavLink className="font-semibold hover:text-white transition-colors" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className="font-semibold px-6 py-3 bg-brand-700 text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-[#f1354278]"
            to="/register"
          >
            Register
          </NavLink>
        </li>
      </>)}
      {userData && (<>
        <UserProfile />
        <LogoutButton className="font-semibold px-6 py-3 bg-brand-700 text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-[#f1354278]" />
      </>)}
    </ul>
  );
}

export default NavbarUserActions;
