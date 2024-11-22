import { useContext } from "react";
import { ProviderUser } from "./Root";
import { AuthContextApi } from "./AuthContext";
import { signOut } from "firebase/auth";
import auth from "../firebase.config";

export default function Profile() {
  const { user } = useContext(ProviderUser);
  const { userId } = useContext(AuthContextApi);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="border grid place-content-center place-items-center h-[500px]">
      <img
        src={user?.photoURL}
        className="max-w-sm rounded-lg shadow-2xl mb-5"
      />
      <h1>Name : {user?.displayName || userId?.displayName}</h1>
      <br />
      <h1>Email : {user?.email || userId?.email} </h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
