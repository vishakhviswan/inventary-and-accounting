import React, { createContext, useState } from "react";

 export const TopBarContext = createContext("");


export const TopContext = ({ children }) => {
  const [recived, setRecived] = useState("");
  const [date, setDate] = useState("");
  const [lot, setLot] = useState("");
  const [validated, setValidated] = useState(false);
  return (
    <TopBarContext.Provider value={{ recived, setRecived,date,setDate,lot,setLot,validated, setValidated}}>
      {children}
    </TopBarContext.Provider>
  );
}


