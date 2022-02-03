// ********New**********
import React, { useContext, useState, useEffect } from "react";
import { Modal, Button, Col, Card } from "react-bootstrap";
import { SideBarContext } from "../store/SideMenuContext";

function InventoryModal() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");

  const {
    setLabelThree,
    setCreateGroup,
    setCreateCategory,
    setCreateUnit,setCreateGodown,
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
    setTitles,
    labelOne,
    setLabelOne,
    labelTwo,
    setLabelTwo,
    placeHolder,
    setPlaceHolder,
  } = useContext(SideBarContext);
  // const [show, setShow] = useState(false);
  const [modalOptions, setModalOptions] = useState("");
  const handleClose = () => {
    setShow(false);
    setCreate(false);
    setAlter(false);
    setList(false);
    setBook(false);
  };
  const handleShow = () => setShow(true);
  const chkOpt = "Create";

  const handleCreate = (e) => {
    setId(e.target.id);
    setTitle(e.target.title);
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
      } else if (e.target.title == "Unit") {
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
      }

    } else {

      console.log(id);
    }
  };
  console.log("idddd", id);

  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ width: "max-content", marginLeft: "40%" }}
      >
        {book == true ? (
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

        {create == true ? (
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
            <Card.Text className="text-items">Stock Item</Card.Text>
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

        {alter == true ? (
          <Modal.Body>
            <Card.Text className="text-items">Stock Group</Card.Text>
            <Card.Text className="text-items">Stock Category</Card.Text>
            <Card.Text className="text-items">Stock Item</Card.Text>
            <Card.Text className="text-items">Unit</Card.Text>
            <Card.Text className="text-items">Godown</Card.Text>
          </Modal.Body>
        ) : (
          ""
        )}

        {list == true ? (
          <Modal.Body>
            <Card.Text className="text-items">Stock Group</Card.Text>
            <Card.Text className="text-items">Stock Category</Card.Text>
            <Card.Text className="text-items">Stock Item</Card.Text>
            <Card.Text className="text-items">Unit</Card.Text>
            <Card.Text className="text-items">Godown</Card.Text>
          </Modal.Body>
        ) : (
          ""
        )}

        {book == true ? (
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
    </div>
  );
}

export default InventoryModal;
