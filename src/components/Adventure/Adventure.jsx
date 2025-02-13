/* eslint-disable react/prop-types */

const Adventure = ({ adventure }) => {
  const { image, adventureTitle, ecoFriendlyFeatures } = adventure;
  return (
    <div className="card bg-base-100 shadow-2xl mt-10">
      <figure className="h-[250px]">
        <img className="h-full w-full" src={image} alt="Shoes" />
      </figure>
      <div className="mt-8 px-3 pb-10">
        <h2 className="card-title">S{adventureTitle}</h2>
        <div className="pl-4 mt-2 mb-3">
          {ecoFriendlyFeatures.map((item, idx) => (
            <li className="font-inter" key={idx}>
              {item}
            </li>
          ))}
        </div>
        <div>
          <h3 className="btn btn-link mb-3">All Adventure</h3>
          <button className="btn bg-[#8bb83b] border-0 text-white hover:bg-[#669AB2] block w-full">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
