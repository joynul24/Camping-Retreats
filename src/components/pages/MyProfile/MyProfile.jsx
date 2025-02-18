import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {

    const {user} = useContext(AuthContext)

    return (
        <div className="flex justify-center container mx-auto mt-10 md:mt-20">
            <div className="shadow-2xl p-6 rounded-xl">
                <h1><span className="text-xl font-medium text-pink-500">Welcome, </span> {user?.displayName} !</h1>
                <div>
                    <div className="flex justify-center mt-3">
                        <img className="w-[60px] rounded-full" src={user?.photoURL} alt="" />
                    </div>
                    <p className="text-center font-inter text-base mt-2">{user?.email}</p>
                    <Link to='/updateProfile'>
                    <button className="btn btn-secondary w-full mt-3">Update Profile</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;