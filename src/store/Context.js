import React, { createContext, useState } from "react";

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);



export default function Context({ children }) {
  const [userDtls, setUserDtls] = useState(null);

  return (
    <AuthContext.Provider value={{ userDtls,setUserDtls }}>{children}</AuthContext.Provider>
  );
}

