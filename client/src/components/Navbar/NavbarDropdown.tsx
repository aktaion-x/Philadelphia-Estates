import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import UserProfile from './UserProfile';
import useAuthContext from '../../hooks/useAuthContext';
import LogoutButton from './LogoutButton';

function NavbarDropdown() {
  const { userData } = useAuthContext();
  const [expandMobileNav, setExpandMobileNav] = useState<boolean>(false)
  const handleCloseNav = (e: React.MouseEvent<HTMLElement>) => {
    const clickedElement = e.target as HTMLElement;
    const elementType = clickedElement.tagName.toLowerCase();
    if (elementType === 'a' || elementType === 'path' || elementType === 'svg' || elementType === 'button') {
      setExpandMobileNav(false)
    }

  }
  return (
    <div className="md:hidden text-white ">
      <div className="flex items-center gap-3">
        {userData && <UserProfile />}
        <div onClick={() => setExpandMobileNav(!expandMobileNav)}><RxHamburgerMenu className='w-8 h-8 cursor-pointer' /></div>
      </div>
      {expandMobileNav && (
        <div onClick={handleCloseNav} className="w-full absolute top-0 left-0 bg-[#000000f2] h-screen">
          <div className="px-4 py-3"><AiOutlineCloseCircle className="w-7 h-7 ml-auto cursor-pointer" /></div>
          <ul className="flex flex-col gap-3">
            <li className="px-5">
              <NavLink className="font-semibold hover:text-white transition-colors" to='/'>Home</NavLink>
            </li>
            <li className="px-5 py-2">
              <NavLink className="font-semibold hover:text-white transition-colors" to='/explore'>Explore</NavLink>
            </li>
            <li className="px-5 py-2">
              <NavLink className="font-semibold hover:text-white transition-colors" to='/about'>About</NavLink>
            </li>
            <li className="px-5 py-2">
              <NavLink className="font-semibold hover:text-white transition-colors" to='/our-team'>Our Team</NavLink>
            </li>
            <li className="px-5 py-2">
              <NavLink className="font-semibold hover:text-white transition-colors" to='/contact'>Contact</NavLink>
            </li>
            {!userData && (<>
              <li className="px-5 py-2">
                <NavLink className="font-semibold hover:text-white transition-colors" to='/login'>Login</NavLink>
              </li>
              <li className="px-5 py-2">
                <NavLink className="font-semibold " to='/register'>Register</NavLink>
              </li>
            </>)}
            {userData && (
              <LogoutButton className='px-5 py-2 text-red-600 font-bold' />
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavbarDropdown;
