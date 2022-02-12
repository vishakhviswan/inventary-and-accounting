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
  const [phLot, setPhLot] = useState("")
  const [showBatchModal, setShowBatchModal] = useState(false);
  const [phMfgDt, setPhMfgDt] = useState("")
  const [phExpDt, setphExpDt] = useState("")
  const [phGodown, setPhGodown] = useState("")
  const [phBatch, setPhBatch] = useState("")
  return (
    <SideBarContext.Provider
      value={{
        phMfgDt, setPhMfgDt,phExpDt, setphExpDt,phGodown, setPhGodown,phBatch, setPhBatch,
        phUnit,
        setPhUnit,
        phQty,
        setPhQty,
        phRate,
        setPhRate,
        phValue,
        setPhValue,
        placeHolder2,
        setPlaceHolder2,
        isAlter,
        phLot,
        setPhLot,
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
        showBatchModal,
        setShowBatchModal,
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
  const [docId, setDocId] = useState("")
  const [showDltModal, setShowDltModal] = useState(false);
  const [presentCollection, setPresentCollection] = useState("");
  const [dltTitle, setDltTitle] = useState("");
  const [dltBody, setDltBody] = useState("");
  const [alterDate, setAlterDate] = useState(false);
  return (
    <StockAlterContext.Provider
      value={{
        showAlter,
        docId,
        setDocId,
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
        showDltModal,
        setShowDltModal,
        presentCollection,
        setPresentCollection,
        dltTitle,
        setDltTitle,
        dltBody,
        setDltBody,
        alterDate,
        setAlterDate,
      }}
    >
      {children}
    </StockAlterContext.Provider>
  );
};