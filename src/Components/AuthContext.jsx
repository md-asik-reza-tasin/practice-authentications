import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContextApi = createContext();

export default function AuthContext({ children }) {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  const createSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserId(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const info = { createSignUp, login, userId, loading };

  return (
    <AuthContextApi.Provider value={info}>{children}</AuthContextApi.Provider>
  );
}
