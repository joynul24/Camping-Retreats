import "./Slider.css";

const Slider = () => {
  return (
    <div className="container mx-auto lg:mt-10 mt-5 px-1 lg:px-0">
      <div className="carousel">
        {/* Slider 1 */}
        <div
          id="slide1"
          className="slider carousel-item relative w-full bg-[url(https://joynul2024.sirv.com/camping_images/camp_banner4.jpg)] bg-no-repeat bg-center bg-cover object-cover rounded-xl"
        >
          <div className="text-white text-center lg:max-w-[50%] mx-auto py-[50px] lg:py-[150px]">
            <h2 className="text-2xl lg:text-5xl font-bold mb-6">
              Escape to the Wild - Reconnect with Nature
            </h2>
            <p className="text-base font-inter">
              Immerse yourself in the beauty of nature, where peace and
              adventure await. Step <br /> away from the hustle of daily life
              and embrace the wilderness.
            </p>
            <button className="btn bg-[#8bb83b] border-0 text-white mt-6 hover:bg-white hover:text-black">
              Book Your Adventure
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* Slider 2 */}
        <div
          id="slide2"
          className="slider carousel-item relative w-full bg-[url(https://joynul2024.sirv.com/camping_images/camp_banner3.jpg)] bg-no-repeat bg-center bg-cover object-cover rounded-xl"
        >
          <div className="text-white text-center lg:max-w-[50%] mx-auto py-[50px] lg:py-[150px]">
            <h2 className="text-2xl lg:text-5xl font-bold mb-6">
              Escape to the Wild - Reconnect with Nature
            </h2>
            <p className="text-base font-inter">
              Immerse yourself in the beauty of nature, where peace and
              adventure await. Step <br /> away from the hustle of daily life
              and embrace the wilderness.
            </p>
            <button className="btn bg-[#8bb83b] border-0 text-white mt-6 hover:bg-white hover:text-black">
              Book Your Adventure
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* Slider 3  */}
        <div
          id="slide3"
          className="slider carousel-item relative w-full bg-[url(https://joynul2024.sirv.com/camping_images/camp_banner2.jpg)] bg-no-repeat bg-center bg-cover object-cover rounded-xl"
        >
          <div className="text-white text-center lg:max-w-[50%] mx-auto py-[50px] lg:py-[150px]">
            <h2 className="text-2xl lg:text-5xl font-bold mb-6">
              Escape to the Wild - Reconnect with Nature
            </h2>
            <p className="text-base font-inter">
              Immerse yourself in the beauty of nature, where peace and
              adventure await. Step <br /> away from the hustle of daily life
              and embrace the wilderness.
            </p>
            <button className="btn bg-[#8bb83b] border-0 text-white mt-6 hover:bg-white hover:text-black">
              Book Your Adventure
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
