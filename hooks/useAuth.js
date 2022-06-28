import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export const authContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [usr, loading, error] = useAuthState(auth);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("onAuthStateChanged");
      if (user) {
        console.log("setting user", user);
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  const signUp = async (data) => {
    console.log("signup", data);
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      throw new Error(error);
    }
  };
  const logIn = async (email, password) => {
    console.log("log in");
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error(error);
    }
  };
  const logOut = async () => {
    try {
      const result = await signOut(auth);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <authContext.Provider value={{ user, loading, error, usr, logIn, logOut, signUp }}>
      {props.children}
    </authContext.Provider>
  );
};
