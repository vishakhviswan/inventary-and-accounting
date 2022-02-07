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
  const [isAlter, setIsAlter] = useState(false);
  const [titles, setTitles] = useState("");
  const [labelOne, setLabelOne] = useState("");
  const [labelTwo, setLabelTwo] = useState("");
  const [labelThree, setLabelThree] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  const [placeHolder2, setPlaceHolder2] = useState("");
  const [underSelection, setUnderSelection] = useState("");
  const [phUnit, setPhUnit] = useState("");
  const [phQty, setPhQty] = useState('')
  const [phRate, setPhRate] = useState("");
  const [phValue, setPhValue] = useState("");
  return (
    <SideBarContext.Provider
      value={{
        phUnit, setPhUnit,phQty, setPhQty,phRate, setPhRate,phValue, setPhValue,placeHolder2, setPlaceHolder2,
        isAlter,
        setIsAlter,
        titles,
        setTitles,
        labelOne,
        setLabelOne,
        labelTwo,
        setLabelTwo,
        placeHolder,
        setPlaceHolder,
        createGroup,
        createUnit,
        setCreateUnit,
        setCreateGroup,
        labelThree,
        setLabelThree,
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
        underSelection,
        setUnderSelection,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export const StockAlterContext = createContext("");

export const AlterContext = ({ children}) => {
  const [showAlter, setShowAlter] = useState(false);
  const [alterGroup, setAlterGroup] = useState(false);
  const [alterCategory, setAlterCategory] = useState(false);
  const [alterItem, setAlterItem] = useState(false);
  const [alterUnit, setAlterUnit] = useState(false);
  const [alterGodown, setAlterGodown] = useState(false);
  return (
    <StockAlterContext.Provider
      value={{
        showAlter,
        setShowAlter,
        alterGroup,
        setAlterGroup,
        alterCategory,
        setAlterCategory,
        alterItem,
        setAlterItem,
        alterUnit,
        setAlterUnit,
        alterGodown,
        setAlterGodown,
      }}
    >
      {children}
    </StockAlterContext.Provider>
  );
};