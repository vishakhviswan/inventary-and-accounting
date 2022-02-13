import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FirebaseContext } from "../store/Context";
import { SideBarContext, StockAlterContext } from "../store/SideMenuContext";

function ConfirmDltModal() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const {
    showDltModal,
    setShowDltModal,
    docId,
    presentCollection,
    setPresentCollection,
    dltTitle,
    dltBody,
    setShowAlter,
  } = useContext(StockAlterContext);
  const { setShowCreate, setShowBatchModal } = useContext(SideBarContext);
  const { db } = useContext(FirebaseContext);
  const handleClose = () => {
    setShowDltModal(false);
    setShowCreate(false);
    setShowAlter(false);
    setShowBatchModal(false);
    setPresentCollection("");
  };

  // useEffect(() => {
  //     setTitle("Delete Stock Group");
  //     setBody("Are you sure you want to delete your account?");

  // }, [])

  const handleDelete = async () => {
    await deleteDoc(doc(db, presentCollection, docId))
      .catch((e) => {
        console.log(e);
        alert("Delete Error :", e);
      })
      .then(() => {
        alert("Deleted");
        handleClose();
      });
  };
  return (
    <div>
      <Modal
        show={showDltModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
        // closeButton
        >
          <Modal.Title className="batchTitle">{dltTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{dltBody}</Modal.Body>

        <Modal.Footer>
          <Button variant="success" type="submit" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete();
            }}
          >
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ConfirmDltModal;
