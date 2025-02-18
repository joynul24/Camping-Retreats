import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  
  const navigate = useNavigate()
  const {signInUser,signInWithGoogle} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
        .then(result => {
          console.log(result.user);
          e.target.reset();
        })
        .catch(error => {
          console.log('ERROR', error.message);
        })
    }

    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate('/')
      })
      .catch((error) => {
        console.log('ERROR' , error.message);
      })
    }

  return (
    <div className="bg-[url(https://joynul2024.sirv.com/camping_images/imgae_5.jpg)] bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center ">
      <div className="backdrop-blur-md bg-white/10 border border-white/30 shadow-lg card  max-w-sm shrink-0">
        <form onSubmit={handleLogin} className="card-body space-y-2">
        <h3 className="text-xl font-bold text-center text-white">Login With</h3>
          <button onClick={handleGoogleSignIn} className="btn text-blue-500 bg-white border-0"><FcGoogle></FcGoogle> Google</button>
          <div className="divider text-white ">OR</div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-white">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full bg-[#8bb83b] border-0 text-white hover:bg-[#669AB2]">Login</button>
          </div>
        <p className="font-semibold font-inter text-white">New to this website? please? <Link className="text-red-400" to='/register'>Register</Link>.</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
