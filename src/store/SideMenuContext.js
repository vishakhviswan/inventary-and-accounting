import React, { createContext, useState } from "react";

export const SideBarContext = createContext("");

export const SideContext = ({ children }) => {
  const [show, setShow] = useState(false);
  const [create, setCreate] = useState(false);
  const [alter, setAlter] = useState(false);
  const [list, setList] = useState(false);
  const [book, setBook] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  return (
    <SideBarContext.Provider
      value={{
        show,
        setShow,
        create,
        setCreate,
        alter,
        setAlter,
        list,
        setList,
        book,
        setBook,
        showCreate,
        setShowCreate,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};
