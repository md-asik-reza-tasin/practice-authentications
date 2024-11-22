import { useContext } from "react";
import { AuthContextApi } from "./AuthContext";
import { Navigate } from "react-router-dom";

export default function Private({ children }) {
  const { userId, loading } = useContext(AuthContextApi);
  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  } else if (userId) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
}
