import { NavLink } from "react-router-dom";
import "./../Components/Header.css";

export default function Header() {
  return (
    <div className="border w-full h-20 flex justify-center items-center">
      <NavLink className="mx-2" to="/profile">
        Profile
      </NavLink>
      <NavLink className="mx-2" to="login">
        Log in
      </NavLink>
      <NavLink className="mx-2" to="/register">
        Register
      </NavLink>
      <NavLink className="mx-2" to="/signup">
        Sign Up
      </NavLink>
      <NavLink className="mx-2" to="/signin">
        Sign in
      </NavLink>
      <NavLink className="mx-2" to="/orders">
        Orders
      </NavLink>
    </div>
  );
}
