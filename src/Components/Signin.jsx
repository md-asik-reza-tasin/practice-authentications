import { useContext } from "react";
import { AuthContextApi } from "./AuthContext";

export default function Signin() {
  const { login } = useContext(AuthContextApi);

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h2 className="text-5xl mx-4 mb-5 font-semibold">Sign In Now</h2>
      <form onSubmit={handleLogIn} className="bg-slate-200">
        <input type="email" name="email" className="m-4" />
        <br />
        <input type="password" name="password" className="m-4" />
        <br />
        <input type="submit" value="Sign In" className="btn btn-primary m-4" />
      </form>
    </div>
  );
}
