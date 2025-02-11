import { Outlet } from "react-router-dom";
import Home from "../COMPONENTS/Home";

const MainLayout = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;