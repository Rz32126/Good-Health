import { FaHandshake } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { PiHandsClappingDuotone } from "react-icons/pi";

const Past = () => {
    return (
      <div className="bg-blue-400 mt-9">
        
          <div className="lg:flex">
        <div>
            <p className="font-semibold text-2xl px-16 py-16">We are served since 35 years to<br></br> helpless people with trust and we are happy<br></br>
            be Part of us
            </p>
        </div>
        <div className="lg:flex py-16">
            <div>
              <span className="text-3xl text-green-800"><PiHandsClappingDuotone /></span>
              <p className="font-bold">372</p>
              <p className="mr-3 font-semibold">Total Awards</p>
            </div>
            <div>
              <span className="text-3xl text-green-800 "><MdGroups2 /></span>
              <p className="font-bold">2,500</p>
              <p className="mr-3 font-semibold">Total Volunteers</p>
            </div>
            <div>
              <span className="text-3xl text-green-800 mr-11"><FaHandshake /></span>
              <p className="font-bold">169</p>
              <p className="font-semibold">Total Projects</p>
            </div>
        </div>
        </div>
      </div>
    );
};

export default Past;