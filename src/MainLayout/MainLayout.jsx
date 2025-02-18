import { Outlet } from "react-router-dom";
import Navber from "../components/Navber/Navber";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="min-h-[calc(100vh-335px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
