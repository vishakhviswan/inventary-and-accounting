// ********New**********
import React, { useContext, useState, useEffect } from "react";
import { Modal, Button, Col, Form, Row } from "react-bootstrap";
import { SideBarContext } from "../store/SideMenuContext";
import { FirebaseContext } from "../store/Context";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
function CreateModal() {
  const { db } = useContext(FirebaseContext);
  const [gName, setGName] = useState("");
  const [under, setUnder] = useState("");

  const { showCreate, setShowCreate } = useContext(SideBarContext);
  // const [show, setShow] = useState(false);

  const handleClose = () => {
    setGName(null)
    setUnder(null)
    setShowCreate(false);
  };
  // const handleShow = () => setShowCreate(true);

  const [groupDetails, setGroupDetails] = useState([]);
  useEffect(() => {
    const getGroup = async () => {
      const groupData = await getDocs(collection(db, "StockGroup"));
      setGroupDetails(
        groupData.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };
    getGroup();
  }, [db]);

  const handleSubmit = (e) => {
    if (under == "") {
      setUnder("Primary")
    }
    e.preventDefault();
    const form = e.currentTarget;
    const StockGroupRef = collection(db, "StockGroup");
    setDoc(doc(StockGroupRef), {  //,general
      groupName: gName,
      under: under,
    }).then(() => {
      handleClose()
      alert("submitted sucsessfull");
    })
  };

  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}

      <Modal
        show={showCreate}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        // style={{ width: "max-content", marginLeft: "40%" }}
      >
        <Modal.Header
        // closeButton
        >
          <Modal.Title>Stock Group Creation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label placeholder="Type Group Name ..." column sm="4">
                Group Name
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="text"
                  plaintext
                  placeholder="Type Group Name"
                  value={gName}
                  onChange={(e) => {
                    setGName(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4">
                Under
              </Form.Label>
              <Col sm="8">
                <Form.Select
                  aria-label="Default select example"
                  value={under}
                  onChange={(e) => {
                    setUnder(e.target.value);
                  }}
                >
                  <option value="abc">Primary</option>
                  {groupDetails.map((obj) => (
                    <option value={obj.groupName }>{obj.groupName}</option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateModal;
