import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase.config";
import { useState } from "react";

export default function Register() {
  const [done, setDone] = useState("");
  const [err, setErr] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const file = e.target.picture.value;

    // console.log(name, email, password, file);

    setDone("");
    setErr("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        updateProfile(result.user, {
          displayName: name,
          photoURL: file,
        });

        setDone("check your email");
        sendEmailVerification(result.user)
          .then(() => {
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.password.value = "";
            e.target.picture.value = "";
          })
          .catch((error) => {
            setErr("something is wrong");
          });
      })
      .catch((error) => {
        setErr("Something is wrong");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="mx-auto mt-12">Register Now</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
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
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
              />
              <div className="form-control">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input
                  type="file"
                  placeholder="Upload your picture"
                  name="picture"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p
            className={`mx-auto mb-10 font-extrabold ${
              done ? "text-green-400" : "text-red-600"
            }`}
          >
            {done || err}
          </p>
        </div>
      </div>
    </div>
  );
}
