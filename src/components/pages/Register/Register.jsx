import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate()
  const {createUser,setUser, updateUserProfile, signInWithGoogle} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name);
        createUser(email, password)
        .then(result => {
          setUser(result.user)
          updateUserProfile({displayName:name, photoURL:photo})
        }).then(()=> {
          e.target.reset();
          navigate('/')
        }).catch(error => {
          console.log('ERROR', error.message);
        })
        .catch(error => {
          console.log("Error", error.message);
        })
    }

    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then((result)=> {
         console.log(result.user);
         navigate('/')
      })
      .catch(error => {
        console.log('Error', error.message);
      })
    }

  return (
    <div className="bg-[url(https://joynul2024.sirv.com/camping_images/camp_banner4.jpg)] bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center ">
      <div className="backdrop-blur-md bg-white/10 border border-white/30 shadow-lg card  max-w-sm shrink-0">
        <form onSubmit={handleRegister} className="card-body space-y-2">
       <h3 className="text-xl font-bold text-center text-white">Register With</h3>
       <button onClick={handleGoogleSignIn} className="btn text-blue-500 bg-white border-0"><FcGoogle></FcGoogle> Google</button>
          <div className="text-center text-white font-bold">Or</div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Photo-URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Your photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full bg-[#8bb83b] border-0 text-white hover:bg-[#669AB2]">
              Register
            </button>
          </div>
          <p className="font-semibold font-inter text-white">
            Already have an account? please{" "}
            <Link className="text-red-400 ml-1 font-bold" to="/login">
              Login
            </Link>{" "}.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
