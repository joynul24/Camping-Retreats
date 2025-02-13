import { useLoaderData } from "react-router-dom";
import Slider from "../../Slider/Slider";
import Adventure from "../../Adventure/Adventure";

const Home = () => {

    const adventures = useLoaderData()

    return (
        <div>
            <Slider></Slider>
            <div className="container mx-auto px-2 lg:px-0">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mt-25 font-bold">Adventure Experiences</h1>
                <p className="lg:w-[600px] md:w-[600px] mx-auto mt-6 text-center font-inter px-2 lg:px-0">Our camping retreats offer breathtaking landscapes, thrilling outdoor activities, and unforgettable moments under the stars.</p>
             <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
             {
                adventures.slice(0,6).map(adventure => <Adventure key={adventure.id} adventure={adventure}></Adventure>)
             }
             </div>
            </div>
        </div>
    );
};

export default Home;