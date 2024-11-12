// services/authentication/authentication.context.js

import React, { createContext, useState } from "react";
import { loginRequest } from "./authentication.service"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.config";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      await loginRequest(email, password);
      setIsAuthenticated(true);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onRegister = async (email, password, repeatedPassword, navigation ) => {
    setError(null);
    if (password !== repeatedPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);  // Set the registered user here
      setError(null);
      navigation.navigate("Login");
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
   
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, user, onRegister, login, logout, error, isLoading }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
