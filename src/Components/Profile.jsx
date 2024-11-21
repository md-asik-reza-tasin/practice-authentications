import { useContext } from "react";
import { ProviderUser} from "./Root";

export default function Profile() {
  const { user } = useContext(ProviderUser);
  console.log(user);

  return (
    <div className="border grid place-content-center place-items-center h-[500px]">
      <img
        src={user.photoURL}
        className="max-w-sm rounded-lg shadow-2xl mb-5"
      />
      <h1>Name : {user.displayName}</h1>
      <br />
      <h1>Email : {user.email} </h1>
    </div>
  );
}
