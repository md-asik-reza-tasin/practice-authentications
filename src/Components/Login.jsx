import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useContext, useRef } from "react";
import auth from "../firebase.config";
import { Result } from "postcss";
import { ProviderUser } from "./Root";

export default function Login() {
  const { setUser } = useContext(ProviderUser);

  //   console.log(setUser)

  const emailRef = useRef();
  const passwordRef = useRef();

  const googleProvider = new GoogleAuthProvider();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        //
        if (result.user.emailVerified) {
          setUser(result.user);
        } else {
          console.log("please verify your account first!");
          return;
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    sendPasswordResetEmail(auth, email).then().catch();
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                ref={passwordRef}
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
              />
              <label className="label">
                <span
                  onClick={handleForgetPassword}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="form-control mt-6 mx-auto mb-3">
            <button onClick={handleGoogle} className="btn btn-primary w-56">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
