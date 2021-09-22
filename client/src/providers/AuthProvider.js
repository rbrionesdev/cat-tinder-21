import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

// probably wont use this (using useContext hook instead )
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const handleRegister = async (user) => {
    console.log("regsiter user:", user);
    // so axios call now
    try {
      let res = await axios.post("/api/auth", user);
      console.log(res);
      setUser(res.data.data);
    } catch (err) {
      // want to handle this in your UI for you sake
      alert(
        "unsuccessful register check console. maybe email is not unique pass invalid"
      );
      console.log(err);
      console.log(err.response);
    }
  };
  const handleLogin = (user) => {
    console.log("login user,user", user);
  };
  const handleLogout = () => {
    console.log("login user");
  };

  return (
    <AuthContext.Provider
      value={{ user, handleRegister, handleLogin, handleLogout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
