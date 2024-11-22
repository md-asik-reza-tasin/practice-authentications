import { useContext } from "react";
import { AuthContextApi } from "./AuthContext";

export default function Signup() {
    
  const { createSignUp } = useContext(AuthContextApi);

  const handleForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    createSignUp(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 className="text-5xl mx-4 mb-5 font-semibold">Sign Up Now</h2>
      <form onSubmit={handleForm} className="bg-slate-200">
        <input type="email" name="email" className="m-4" />
        <br />
        <input type="password" name="password" className="m-4" />
        <br />
        <input type="submit" value="Sign Up" className="btn btn-primary m-4" />
      </form>
    </div>
  );
}
