import { Link, NavLink } from "react-router-dom";
import "./Navber.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/adventure">All Adventure</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/updateProfile">Update Profile</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/myProfile">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className=" sticky z-50 top-0 backdrop-blur-xl bg-white/30">
      <div className="navbar w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <span className="md:flex hidden">
              <img
                className="w-15"
                src="https://joynul2024.sirv.com/camping_images/camping-logo.png"
                alt=""
              />
            </span>
            <Link to="/">
              <h2 className="lg:text-xl text-[#8bb83b] cursor-pointer">
                Camping Retreats
              </h2>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? 
            <div className="flex gap-2 items-center">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user?.displayName}
              >
                <div className="rounded-full">
                  <img
                    className="border-white border-2 rounded-full w-[50px]"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="btn bg-red-400 border-0 hover:bg-red-500 text-white"
              >
                Sign Out
              </button>
            </div>
           : 
            <Link to="/login">
              <button className="btn bg-[#8bb83b] border-0 text-white hover:bg-[#669AB2]">
                Login
              </button>
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navber;
