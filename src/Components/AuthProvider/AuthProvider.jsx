import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      })
      .catch((error) => {
        // Handle error
      });
  };

  const logOut = () => {
    return signOut(auth)
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
      })
      .catch((error) => {
        // Handle error
      });
  };

  const updateUser = (user, name, photo) => {
    return updateProfile(user, { displayName: name, photoURL: photo });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      })
      .catch((error) => {
        // Handle error
      });
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      })
      .catch((error) => {
        // Handle error
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="mt-40 text-center">
        Loading...<progress className="progress w-56"></progress>
      </div>
    );
  }

  const authInfo = {
    user,
    setUser,
    signIn,
    updateUser,
    logOut,
    loading,
    createUser,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
  );
};

export default AuthProvider;
