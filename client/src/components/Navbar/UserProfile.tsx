import { Link } from 'react-router-dom';
import { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import useAuthContext from '../../hooks/useAuthContext';

function UserProfile() {
  const { userData } = useAuthContext()
  const [profilePopup, setProfilePopup] = useState<boolean>(false);
  return (
    <div onClick={() => setProfilePopup(!profilePopup)} className="relative">
      <button className="font-semibold flex flex-col items-center gap-1 hover:text-white transition-colors mr-5">
        <BiSolidUser className="w-5 h-5" /> <span>{userData?.user.fullName.split(' ')[0]}</span>
      </button>
      {profilePopup && (
        <div className='absolute w-fit whitespace-nowrap text-center top-full left-1/2 translate-y-6 -translate-x-1/2 bg-black py-3 rounded-xl'>
          <ul >
            <Link className='px-10 block py-2 hover:bg-gray-900' to="/profile">Profile</Link>
            <Link className='px-10 block py-2 hover:bg-gray-900' to="/add-post">Post a Estate</Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
