import { useEffect, useState } from "react";

const ClientReview = () => {
  const [clientReview, setClientReview] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setClientReview(data));
  }, []);
  console.log(clientReview);

  return (
    <div>
      <h1 className="text-center mt-10 md:mt-20 text-xl md:text-2xl lg:text-3xl font-bold">
        What Our Visitors Say
      </h1>
      <p className=" md:w-[500px] mx-auto text-center mt-4 font-inter text-gray-600">Hear from our happy campers! Discover real stories from visitors who have experienced the beauty, adventure, and tranquility of our camping retreats.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clientReview.map((review, idx) => (
          <div className=" mt-5 p-6 bg-black text-white rounded-3xl" key={idx}>
            <div className="flex justify-center">
              <img
                className="rounded-full border p-1"
                src={review.image}
                alt=""
              />
            </div>
            <p className="text-center text-xl font-bold mt-4">{review.name}</p>
            <p className="text-center mt-2 font-inter text-gray-400">
              {review.review}
            </p>
            <p className="text-center mt-4">
              <i className="fa-solid fa-star text-orange-400"></i>
              <i className="fa-solid fa-star text-orange-400"></i>
              <i className="fa-solid fa-star text-orange-400"></i>
              <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
      <button className="btn hover:bg-[#8bb83b] bg-black text-white">
        Read More...
      </button>
      </div>
    </div>
  );
};

export default ClientReview;
