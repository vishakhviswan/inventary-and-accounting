import React, { createContext, useState } from "react";

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);



export default function Context({ children }) {
  const [userDtls, setUserDtls] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  return (
    <AuthContext.Provider
      value={{ userDtls, setUserDtls, userDetails, setUserDetails }}
    >
      {children}
    </AuthContext.Provider>
  );
}

