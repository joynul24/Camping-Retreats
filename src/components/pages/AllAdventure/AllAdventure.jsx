import { useLoaderData } from "react-router-dom";
import Adventure from "../../Adventure/Adventure";

const AllAdventure = () => {

    const adventures = useLoaderData()

    return (
        <div className="container mx-auto mt-8 px-2">
            <h3 className="text-center text-xl lg:text-3xl mg:text-2xl font-bold">Service of all adventure</h3>
            <p className="text-center px-2 lg:px-0 lg:w-[450px] mx-auto font-inter mt-3 text-gray-600">Here you can get all kinds of camoing packages you like that will be like your mind and you will injoy a lot. To get adventure as you like, keep scroll downward</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
             {
                adventures.map(adventure => <Adventure key={adventure.id} adventure={adventure}></Adventure>)
             }
             </div>
        </div>
    );
};

export default AllAdventure;