import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="page">
      <div className="flex justify-between items-start mt-16 flex-wrap">
        <div className="md:w-2/5">
          <h1 className="text-5xl font-bold mb-5">Contact Us</h1>
          <p className="text-gray-500 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit consequatur facilis perferendis non, ea quis accusantium illo tempore debitis obcaecati voluptate minus odio, iure deserunt itaque incidunt commodi sed!</p>
          <div className="pl-10">
            <div className="flex gap-5 mb-3">
              <FaPhone />
              <span>+1 (123) 456 7890</span>
            </div>
            <div className="flex gap-5 mb-3">
              <MdEmail />
              <span>company@mail.com</span>
            </div>
          </div>
        </div>
        <form className="md:w-2/5 w-full mx-auto">
          <label className="my-6 flex flex-col">
            <span className="text-gray-800 relative w-fit">Name</span>
            <input type="text" className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800"/>
          </label>
          <label className="my-6 flex flex-col">
            <span className="text-gray-800 relative w-fit">Email</span>
            <input type="email" className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800"/>
          </label>
          <label className="my-6 flex flex-col">
            <span className="text-gray-800 relative w-fit">Message</span>
            <textarea className="border h-40 px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800"></textarea>
          </label>
          <button className="font-semibold px-6 py-3 bg-brand-700 text-white transition-shadow duration-300 hover:shadow-lg  active">Send</button>
      </form>
      </div>
    </div>
  );
}

export default Contact;
