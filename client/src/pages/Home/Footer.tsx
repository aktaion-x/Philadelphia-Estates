import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-black text-white px-5">
      <div className="container  py-10 md:py-32 mx-auto flex justify-between gap-14 flex-wrap">
        <div className="flex-1">
          <h2 className="font-bold text-xl mb-4">My Real-State</h2>
          <p className="text-gray-300 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni tenetur eius eaque, nulla quasi non reiciendis? Nostrum, aut alias, voluptas</p>
          <div className="font-bold">
            <div className="flex gap-2 items-center mb-1">
              <FaSquarePhone />
              <span>(123)-456-789</span>
            </div>
            <div className="flex gap-2 items-center">
              <MdEmail />
              <span>anymail@mail.com</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-xl mb-4">Locations</h2>
          <ul className="flex flex-col gap-3">
            <li>USA-New York</li>
            <li>UAE-Dubai</li>
            <li>JO-Amman</li>
            <li>KSA-Riyadh</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-xl mb-4">Working Hours</h2>
          <ul className="flex flex-col gap-1">
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-xl mb-4">Subscription</h2>
          <span>Subscribe your Email address for latest news & updates</span>
          <div className="mt-5">
            <input className="w-full py-3 border mb-1 px-4 text-black outline-none focus:border focus:border-brand-700" placeholder="Email" type="email" />
            <button className="bg-brand-700 text-white font-bold w-full py-3">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
