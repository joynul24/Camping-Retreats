
const ChooseUs = () => {
    return (
        <div className="mt-15 md:mt-20 px-1 md:px-0">
            <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold text-center">Why Choose Us</h1>
            <h4 className="font-inter text-gray-600 text-center mt-4">There are a few experiences given below, please choose your choice</h4>

            <div className="mt-10 flex-col lg:flex-row lg:flex gap-6">
                {/* card 1 */}
                <div className="border border-blue-400 p-6 rounded-2xl mb-5 lg:mb-0">
                   <div className="flex justify-center">
                     <img className=" rounded-full" src="https://joynul2024.sirv.com/camping_images/why-chose-us/unmatched.jpg" alt="" />
                   </div>
                   <div className="text-center mt-8">
                     <h3 className=" lg:text-2xl font-semibold">Unmatched Natural Experience</h3>
                     <p className="font-inter text-gray-600 mt-3">Escape the hustle and bustle of city life and reconnect with nature like never before. Our camping retreats are nestled in breathtaking landscapes, offering serene lakes, lush forests, and mesmerizing mountain views. Experience the perfect blend of adventure and tranquility with our carefully curated camping spots.</p>
                   </div>
                </div>
                {/* card 2 */}
                <div className="border border-blue-400 p-6 rounded-2xl mb-5 lg:mb-0">
                   <div className="flex justify-center">
                     <img 
                     className="rounded-full"
                     src="https://joynul2024.sirv.com/camping_images/why-chose-us/activities.jpg" alt="" />
                   </div>
                   <div className="text-center mt-8">
                     <h3 className=" lg:text-2xl font-semibold"> Adventure & Activities</h3>
                     <p className="font-inter text-gray-600 mt-3">From thrilling hiking trails and kayaking adventures to cozy bonfires under the starry sky, we offer a variety of activities for all adventure lovers. Whether youre a solo traveler or with family and friends, theres always something exciting to do at our retreats!</p>
                   </div>
                </div>
                {/* card 3 */}
                <div className="border border-blue-400 p-6 rounded-2xl">
                   <div className="flex justify-center">
                     <img
                     className="rounded-full"
                      src="https://joynul2024.sirv.com/camping_images/why-chose-us/eco-friendly.jpg" alt="" />
                   </div>
                   <div className="text-center mt-8">
                     <h3 className=" lg:text-2xl font-semibold"> Eco-Friendly & Sustainable</h3>
                     <p className="font-inter text-gray-600 mt-3">We are committed to protecting nature while providing an unforgettable experience. Our campsites follow eco-friendly practices, such as zero-waste policies and sustainable camping gear, to ensure that we leave no trace behind. Join us in preserving the beauty of the great outdoors!</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;