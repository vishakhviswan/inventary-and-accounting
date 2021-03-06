// ********New**********
import React, { useContext, useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SideBarContext, StockAlterContext } from "../store/SideMenuContext";

function InventoryModal() {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const {
    setLabelThree,
    setCreateGroup,
    setCreateCategory,
    setCreateUnit,
    setCreateGodown,
    setCreateItem,
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

    setShowCreate,
    setTitles,

    setLabelOne,

    setLabelTwo,

    setPlaceHolder,
  } = useContext(SideBarContext);

  const {
    setShowAlter,
    setAlterGroup,
    setAlterCategory,
    setAlterItem,
    setAlterUnit,
    setAlterGodown,
    listGroup,
    setListGroup,
    listCategory,
    setListCategory,
    listItem,
    setListItem,
    listGodown,
    setListGodown,
    listUnit,
    setListUnit,
    listShow,
    setListShow,
  } = useContext(StockAlterContext);

  const handleClose = () => {
    setShow(false);
    setCreate(false);
    setAlter(false);
    setList(false);
    setBook(false);
  };

  const handleCreate = (e) => {
    setId(e.target.id);
    if (e.target.id === "create") {
      if (e.target.title === "Stock Group") {
        setShowCreate(true);
        setCreateGroup(true);
        setTitles("Stock Group Creation");
        setLabelOne("Group Name");
        setLabelTwo("Under");
        setPlaceHolder("Type Group Name");
      } else if (e.target.title === "Stock Category") {
        setShowCreate(true);
        setCreateCategory(true);
        setTitles("Stock Category Creation");
        setLabelOne("Category Name");
        setLabelTwo("Under");
        setPlaceHolder("Type Category Name");
      } else if (e.target.title === "Unit") {
        setShowCreate(true);
        setCreateUnit(true);
        setTitles("Unit Creation");
        setLabelOne("Symbol");
        setLabelTwo("Formal Name");
        setLabelThree("Unit Quantity Code (UQC)");
        setPlaceHolder("Type Here....");
      } else if (e.target.title === "Godown") {
        setShowCreate(true);
        setCreateGodown(true);
        setTitles("Godown Creation");
        setLabelOne("Godown Name");
        setLabelTwo("Under");
        setPlaceHolder("Type Here....");
      } else if (e.target.title === "Stock Item") {
        setShowCreate(true);
        setCreateItem(true);
        setTitles("Stock Item Creation");
        setLabelOne("Item Name");
        setLabelTwo("Under");
        setLabelThree("Units");
        setPlaceHolder("Type Here....");
      }
    } else {
      console.log(id);
    }
  };

  // ***********************Alter Section**********************
  const handleAlter = (e) => {
    if (e.target.id === "alter") {
      if (e.target.title === "Stock Group") {
        setShowAlter(true);
        setAlterGroup(true);
      } else if (e.target.title === "Stock Category") {
        setShowAlter(true);
        setAlterCategory(true);
      } else if (e.target.title === "Stock Item") {
        setShowAlter(true);
        setAlterItem(true);
      } else if (e.target.title === "Unit") {
        setShowAlter(true);
        setAlterUnit(true);
      } else if (e.target.title === "Godown") {
        setShowAlter(true);
        setAlterGodown(true);
      }
    } else {
      console.log("Its Not Alter Selection");
    }
  };

  // ***********************List Section**********************
  const callList = () => {
    navigate("/inventorychart");
  };
  const handleList = (e) => {
    if (e.target.id === "list") {
      if (e.target.title === "Stock Group") {
        setListCategory(false);
        setListItem(false);
        setListUnit(false);
        setListGodown(false);

        setListShow(true);
        setListGroup(true);
        callList();
      } else if (e.target.title === "Stock Category") {
        setListItem(false);
        setListUnit(false);
        setListGodown(false);
        setListGroup(false);

        setListShow(true);
        setListCategory(true);
        callList();
      } else if (e.target.title === "Stock Item") {
        setListCategory(false);
        setListUnit(false);
        setListGodown(false);
        setListGroup(false);

        setListShow(true);
        setListItem(true);
        callList();
      } else if (e.target.title === "Unit") {
        setListCategory(false);
        setListItem(false);
        setListGodown(false);
        setListGroup(false);

        setListShow(true);
        setListUnit(true);
        callList();
      } else if (e.target.title === "Godown") {
        setListCategory(false);
        setListItem(false);
        setListUnit(false);
        setListGroup(false);

        setListShow(true);
        setListGodown(true);
        callList();
      }
    } else {
      console.log("Its Not Alter Selection");
    }
  };

  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}
      {/* *************************Create Modal********************* */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ width: "max-content", marginLeft: "40%" }}
      >
        {book === true ? (
          <Modal.Header
          // closeButton
          >
            <Modal.Title className="text-Title">Inventory</Modal.Title>
          </Modal.Header>
        ) : (
          <Modal.Header
          // closeButton
          >
            <Modal.Title className="text-Title">Inventory Master</Modal.Title>
          </Modal.Header>
        )}
        {create === true ? (
          <Modal.Body>
            <Card.Text
              className="text-items"
              id="create"
              title="Stock Group"
              onClick={(e) => {
                handleCreate(e);
                handleClose();
              }}
            >
              Stock Group
            </Card.Text>
            <Card.Text
              className="text-items"
              id="create"
              title="Stock Category"
              onClick={(e) => {
                handleCreate(e);
                handleClose();
              }}
            >
              Stock Category
            </Card.Text>
            <Card.Text
              className="text-items"
              id="create"
              title="Stock Item"
              onClick={(e) => {
                handleCreate(e);
                handleClose();
              }}
            >
              Stock Item
            </Card.Text>
            <Card.Text
              className="text-items"
              id="create"
              title="Unit"
              onClick={(e) => {
                handleCreate(e);
                handleClose();
              }}
            >
              Unit
            </Card.Text>
            <Card.Text
              className="text-items"
              id="create"
              title="Godown"
              onClick={(e) => {
                handleCreate(e);
                handleClose();
              }}
            >
              Godown
            </Card.Text>
          </Modal.Body>
        ) : (
          ""
        )}
        {/* * *************************End Create Modal********************* * * */}

        {/* *************************Alter Modal********************* * */}
        {alter === true ? (
          <Modal.Body>
            <Card.Text
              className="text-items"
              id="alter"
              title="Stock Group"
              onClick={(e) => {
                handleAlter(e);
                // handleClose();
              }}
            >
              Stock Group
            </Card.Text>
            <Card.Text
              className="text-items"
              id="alter"
              title="Stock Category"
              onClick={(e) => {
                handleAlter(e);
                // handleClose();
              }}
            >
              Stock Category
            </Card.Text>
            <Card.Text
              className="text-items"
              id="alter"
              title="Stock Item"
              onClick={(e) => {
                handleAlter(e);
                // handleClose();
              }}
            >
              Stock Item
            </Card.Text>
            <Card.Text
              className="text-items"
              id="alter"
              title="Unit"
              onClick={(e) => {
                handleAlter(e);
                // handleClose();
              }}
            >
              Unit
            </Card.Text>
            <Card.Text
              className="text-items"
              id="alter"
              title="Godown"
              onClick={(e) => {
                handleAlter(e);
                // handleClose();
              }}
            >
              Godown
            </Card.Text>
          </Modal.Body>
        ) : (
          ""
        )}
        {/* *************************List Modal********************* * */}
        {list === true ? (
          <Modal.Body>
            <Card.Text
              className="text-items"
              id="list"
              title="Stock Group"
              onClick={(e) => {
                handleList(e);
                // handleClose();
              }}
            >
              Stock Group
            </Card.Text>
            <Card.Text
              className="text-items"
              id="list"
              title="Stock Category"
              onClick={(e) => {
                handleList(e);
                // handleClose();
              }}
            >
              Stock Category
            </Card.Text>
            <Card.Text
              className="text-items"
              id="list"
              title="Stock Item"
              onClick={(e) => {
                handleList(e);
                // handleClose();
              }}
            >
              Stock Item
            </Card.Text>
            <Card.Text
              className="text-items"
              id="list"
              title="Unit"
              onClick={(e) => {
                handleList(e);
                // handleClose();
              }}
            >
              Unit
            </Card.Text>
            <Card.Text
              className="text-items"
              id="list"
              title="Godown"
              onClick={(e) => {
                handleList(e);
                // handleClose();
              }}
            >
              Godown
            </Card.Text>
          </Modal.Body>
        ) : (
          ""
        )}
        {book === true ? (
          <Modal.Body>
            <span>boook</span>
          </Modal.Body>
        ) : (
          ""
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* *************************End Alter Modal********************* * */}
    </div>
  );
}

export default InventoryModal;
