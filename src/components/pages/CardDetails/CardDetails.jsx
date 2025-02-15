import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    adventureTitle,
    shortDescription,
    image,
    adventureCost,
    duration,
    location,
    adventureLevel,
    ecoFriendlyFeatures,
    includedItems,
    categoryName,
  } = data;

  return (
    <div className="flex justify-center px-1 lg:px-0 mt-10 md:mt-20">
      <div className="card shadow-xl">
        <figure className="md:w-[700px] h-[400px]">
          <img className="w-full h-full" src={image} alt="Adventure image" />
        </figure>
        <div className="w-full space-y-1 p-6">
          <h1 className="font-bold md:text-2xl lg:text-3xl">{adventureTitle}</h1>
          <p className="font-inter font-medium">
            Description:
             <span className="text-gray-600"> {shortDescription}</span>
          </p>
          <p className="font-inter font-medium">
            Adventure Cost: <span className="text-gray-600">{adventureCost}$</span>
          </p>
          <p className="font-inter font-medium">
            Category: <span className="text-gray-600">{categoryName}.</span>
          </p>
          <p className="font-inter font-medium">
            Location: <span className="text-gray-600">{location}.</span>
          </p>
          <p className="font-inter font-medium">
            duration: <span className="text-gray-600">{duration}.</span>
          </p>
          <p className="font-inter font-medium">
            Adventure Level:{" "}
            <span className="text-gray-600">{adventureLevel}.</span>
          </p>
          <div>
            <p className="font-bold">Eco Friendly Features:</p>
            <div className="pl-4 font-inter text-gray-600">
              {ecoFriendlyFeatures.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </div>
          </div>

          <div>
            <p className="font-bold">Included Items:</p>
            <div className="pl-4 font-inter text-gray-600">
              {includedItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </div>
          </div>
          <button className="btn bg-[#8bb83b] border-0 text-white hover:bg-[#669AB2]">
          Talk with Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
