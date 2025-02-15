/* eslint-disable react/prop-types */

import { Link, NavLink } from "react-router-dom";

const Adventure = ({ adventure }) => {
  const { image, adventureTitle, ecoFriendlyFeatures,id } = adventure;
  return (
    <div className="card shadow-2xl mt-10 transition duration-500 hover:scale-105 overflow-hidden">
      <figure className="h-[250px]">
        <img className="h-full w-full" src={image} alt="Shoes" />
      </figure>
      <div className="mt-8 px-3 pb-10">
        <h2 className="card-title">{adventureTitle}</h2>
        <div className="pl-4 mt-2 mb-3">
          {ecoFriendlyFeatures.map((item, idx) => (
            <li className="font-inter text-gray-600" key={idx}>
              {item}
            </li>
          ))}
        </div>
        <div>
          <Link to="/adventure">
            <h3 className="btn btn-link mb-3 text-[#567521] hover:text-[#669AB2]">
              All Adventure
            </h3>
          </Link>
          <NavLink to={`/CardDetails/${id}`}>
            <button className="btn bg-[#8bb83b] border-0 text-white hover:bg-[#669AB2] block w-full">
              Explore Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
