import React, { createContext, useState } from "react";

export const SideBarContext = createContext("");

export const SideContext = ({ children }) => {
  const [show, setShow] = useState(false);
  const [create, setCreate] = useState(false);
  const [alter, setAlter] = useState(false);
  const [list, setList] = useState(false);
  const [book, setBook] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [createGroup, setCreateGroup] = useState(false);
  const [createCategory, setCreateCategory] = useState(false);
  const [createUnit, setCreateUnit] = useState(false);
  const [createItem, setCreateItem] = useState(false);
  const [createGodown, setCreateGodown] = useState(false);
  const [titles, setTitles] = useState("");
  const [labelOne, setLabelOne] = useState("");
  const [labelTwo, setLabelTwo] = useState("");
  const [labelThree, setLabelThree] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  return (
    <SideBarContext.Provider
      value={{
        titles, setTitles,labelOne, setLabelOne,labelTwo, setLabelTwo,placeHolder, setPlaceHolder,
        createGroup,createUnit, setCreateUnit,
        setCreateGroup,labelThree, setLabelThree,
        createCategory,
        setCreateCategory,
        createItem,
        setCreateItem,
        createUnit,
        setCreateUnit,
        createGodown,
        setCreateGodown,
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
