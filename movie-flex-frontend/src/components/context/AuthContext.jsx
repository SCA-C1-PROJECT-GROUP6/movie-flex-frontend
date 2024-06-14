import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const stringifyUserData = window.localStorage.getItem("userData");

    if (stringifyUserData) {
      const userData = JSON.parse(stringifyUserData);
      setAuth(userData);
    } else {
      setAuth(null);
    }
  }, [navigate, location]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const UseAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
