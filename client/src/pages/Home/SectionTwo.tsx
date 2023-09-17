import React, { useState } from 'react'
import { stateTypes } from "../../utils/enumsParser";
import { Link } from "react-router-dom";
import { stateFeatures } from '../../utils/stateFeatures';

function SectionTwo() {
  const [currentType, setCurrentType] = useState("0")

  const handleChangeType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, key: string) => {
    e.preventDefault();
    setCurrentType(key)
  }
  return (
    <div className="section text-center mx-auto">
      <h4 className="text-lg font-semibold mb-5">Lorem ipsum dolor sit amet consectetur</h4>
      <h1 className="text-4xl font-bold mb-5">Quick & easy home rental</h1>
      <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, asperiores dolorum! Quod commodi, saepe in expedita dignissimos</p>
      <div className="flex gap-10 justify-between items-center mt-20 flex-wrap">
        <ul className="flex flex-col gap-5 w-52 mx-auto">
          {Object.keys(stateTypes).map((key) => (
            <button key={key} onClick={e => handleChangeType(e, key)} className={`${currentType == key ? "bg-brand-700 text-white" : ""} text-xl w-full px-3 py-3 hover:bg-brand-700 hover:text-white transition-colors font-bold flex justify-center items-center `}>
              {stateTypes[key as keyof typeof stateTypes]}
            </button>
          ))}
        </ul>
        <div className="hidden md:block lg:order-none order-1 mx-auto">
          <img className=' max-h-96 max-w-96 rounded-md' src={`/img/${stateTypes[Number(currentType)].toLowerCase()}.png`} alt="" />
        </div>
        <div className="w-56 mx-auto">
          <div>
            <div className="py-3 px-5 bg-brand-700 text-white font-semibold ">
              Start from / <span className="font-extrabold text-xl">{stateFeatures[currentType as keyof typeof stateFeatures].startFrom}</span>
            </div>
            <ul className="border-2 border-gray-500 border-y-0">
              {Object.keys(stateFeatures[currentType as keyof typeof stateFeatures]).map((key) => (
                <React.Fragment key={key}>
                  {key !== "startFrom" && (
                    <li className="border-b-2 border-gray-500 py-3 flex justify-between items-center">
                      <span className="w-full border-r-2 border-gray-500">{key}</span>
                      <span className="w-full">{stateFeatures[currentType as keyof typeof stateFeatures][key]}</span>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
            <Link to={`/explore?type=${currentType}`} className="text-xl font-semibold w-11/12 py-3 bg-brand-700 text-white flex justify-center items-center mt-5 mx-auto">
              Explore more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;


