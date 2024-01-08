import { useState } from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";

function Faq() {
  const [activeFaq, setActiveFaq] = useState(0)
  return (
    <div>
      <div className="section mx-auto text-center">
        <div className="lg:w-8/12 mx-auto">
          <h5 className="font-semibold text-lg mb-3">FAQ</h5>
          <h1 className="font-bold text-4xl mb-5">Frequently Asked Questions</h1>
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error harum nemo autem rem optio perferendis alias necessitatibus pariatur? Tenetur et qui aut reiciendis deleniti, distinctio earum quaerat quasi non eveniet.</p>
          <div className="flex-flex-col gap-5 mt-24 w-full border-b">
            <div className="mb-5 asd">
              <div onClick={() => {
                if (activeFaq === 1) {
                  setActiveFaq(0)
                } else {
                  setActiveFaq(1)
                }
              }} className="flex justify-between items-center py-3 px-2 md:px-7 font-bold text-lg cursor-pointer transition-colors hover:bg-brand-700 hover:text-white">
                <span>1. What is special about comparing real-estate deals?</span>
                <span className="ml-2"> <AiOutlineArrowDown /> </span>
              </div>
              <div className="overflow-hidden">
                <p className={`${activeFaq === 1 ? "mt-0" : ""} -mt-[100%] px-5 md:px-16 py-6 text-start text-gray-500 transition-all duration-500`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum incidunt eligendi quaerat dolore ipsam, consectetur, a quibusdam reprehenderit odio natus repudiandae nisi enim dignissimos consequuntur, velit quisquam sapiente dolor perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio vero vel dicta autem deserunt deleniti </p>
              </div>
            </div>
            <div className="mb-5 asd">
              <div onClick={() => {
                if (activeFaq === 2) {
                  setActiveFaq(0)
                } else {
                  setActiveFaq(2)
                }
              }} className="flex justify-between items-center py-3 px-2 md:px-7 font-bold text-lg cursor-pointer transition-colors hover:bg-brand-700 hover:text-white ">
                <span>2. What is special about comparing real-estate deals?</span>
                <span className="ml-2"> <AiOutlineArrowDown /> </span>
              </div>
              <div className="overflow-hidden">
                <p className={`${activeFaq === 2 ? "mt-0" : ""} -mt-[100%] px-5 md:px-16 py-6 text-start text-gray-500 transition-all duration-500`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum incidunt eligendi quaerat dolore ipsam, consectetur, a quibusdam reprehenderit odio natus repudiandae nisi enim dignissimos consequuntur, velit quisquam sapiente dolor perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio vero vel dicta autem deserunt deleniti </p>
              </div>
            </div>
            <div className="mb-5 asd">
              <div onClick={() => {
                if (activeFaq === 3) {
                  setActiveFaq(0)
                } else {
                  setActiveFaq(3)
                }
              }} className="flex justify-between items-center py-3 px-2 md:px-7 font-bold text-lg cursor-pointer transition-colors hover:bg-brand-700 hover:text-white ">
                <span>3. What is special about comparing real-estate deals?</span>
                <span className="ml-2"> <AiOutlineArrowDown /> </span>
              </div>
              <div className="overflow-hidden">
                <p className={`${activeFaq === 3 ? "mt-0" : ""} -mt-[100%] px-5 md:px-16 py-6 text-start text-gray-500 transition-all duration-500`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum incidunt eligendi quaerat dolore ipsam, consectetur, a quibusdam reprehenderit odio natus repudiandae nisi enim dignissimos consequuntur, velit quisquam sapiente dolor perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio vero vel dicta autem deserunt deleniti </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
