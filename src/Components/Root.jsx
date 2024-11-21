import { Outlet } from "react-router-dom";
import Header from "./Header";
import { createContext, useState } from "react";

const ProviderUser = createContext(null);

export default function Root() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <ProviderUser.Provider value={{ setUser, user }}>
        <Header></Header>
        <Outlet></Outlet>
      </ProviderUser.Provider>
    </div>
  );
}

export { ProviderUser };
