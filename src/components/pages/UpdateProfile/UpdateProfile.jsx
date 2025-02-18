import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UpdateProfile = () => {
  const {updateUserProfile} = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUserProfile({displayName:name, photoURL:photo})
    e.target.reset()
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleUpdateProfile} className="card-body">
            <h1 className="text-center font-bold">Update your profile</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photo Url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary w-full">Update Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
