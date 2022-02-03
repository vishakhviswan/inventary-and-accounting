// ********New**********
import React, { useContext, useState, useEffect } from "react";
import { Modal, Button, Col, Form, Row } from "react-bootstrap";
import { SideBarContext } from "../store/SideMenuContext";
import { FirebaseContext } from "../store/Context";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import "./Components.css";

function CreateModal() {
  const { db } = useContext(FirebaseContext);
  const [gName, setGName] = useState("");
  const [gName2, setGName2] = useState("");
  const [under, setUnder] = useState("");
  const [uqc, setUqc] = useState("");
  const [uqcName, setUqcName] = useState("");

  const {
    showCreate,
    setShowCreate,
    createGroup,
    createCategory,
    setCreateCategory,
    setCreateGroup,
    createUnit,
    setCreateUnit,
    createGodown,
    setCreateGodown,
    titles,
    labelOne,
    labelTwo,
    labelThree,
    placeHolder,
  } = useContext(SideBarContext);
  // const [show, setShow] = useState(false);

  const handleClose = () => {
    setGName(null);
    setUnder(null);
    setShowCreate(false);
    setCreateCategory(false);
    setCreateGroup(false);
    setCreateUnit(false);
  };
  const handleCloseUQC = () => {
    setNewUQC(false);
  };

  // const handleShow = () => setShowCreate(true);

  // const [groupDetails, setGroupDetails] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [godownDetails, setGodownDetails] = useState([]);
  const [uqcDetails, setUqcDetails] = useState([]);
  // **************** Get From Firebase ***************************
  useEffect(() => {
    const getUqc = async () => {
      const groupData = await getDocs(collection(db, "UQC"));
      setUqcDetails(
        groupData.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
      getUqc();
    };

    const getCategory = async () => {
      const categoryData = await getDocs(collection(db, "StockCategory"));
      setCategoryDetails(
        categoryData.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };
    getCategory();
  }, [db]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (createGroup === true) {
      const StockGroupRef = collection(db, "StockGroup");
      setDoc(doc(StockGroupRef), {
        //,general
        groupName: gName,
        under: under,
      }).then(() => {
        handleClose();
        alert("Group submitted sucsessfull");
      });
    } else if (createCategory === true) {
      const StockCollectionRef = collection(db, "StockCategory");
      setDoc(doc(StockCollectionRef), {
        //,general
        categoryName: gName,
        categoryUnder: under,
      }).then(() => {
        handleClose();
        alert("Category submitted sucsessfull");
      });
    } else if (createUnit === true) {
      const StockUnitRef = collection(db, "Units");
      setDoc(doc(StockUnitRef), {
        //,general
        symbol: gName,
        formalName: gName2,
        uqc: uqc,
      }).then(() => {
        handleClose();
        alert("Unit submitted sucsessfull");
      });
    }
  };

  const [newUQC, setNewUQC] = useState(false);
  const handleCreateUQC = (e) => {
    e.preventDefault();
    setNewUQC(true);
  };

  const handleSubmitUqc = (e) => {
    const newUqcRef = collection(db, "UQC");
    setDoc(doc(newUqcRef), {
      //,general
      uqcName: uqcName,
    }).then(() => {
      handleCloseUQC();
      alert("UQC Added sucsessfull");
    });
  };
  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}
      {/* {createGroup == true ? ( */}
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
          <Modal.Title>{titles}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label placeholder="Type Group Name ..." column sm="4">
                {labelOne}
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="text"
                  plaintext
                  placeholder={placeHolder}
                  value={gName}
                  onChange={(e) => {
                    setGName(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            {createUnit == true ? (
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label placeholder="Type Group Name ..." column sm="4">
                  {labelTwo}
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    plaintext
                    placeholder={placeHolder}
                    value={gName2}
                    onChange={(e) => {
                      setGName2(e.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
            ) : (
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  {labelTwo}
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
                    {godownDetails.map((obj) => (
                      <option>{obj.godownName}</option>
                    ))}
                    :
                    {categoryDetails.map((obj) => (
                      <option value={obj.categoryName}>
                        {obj.categoryName}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
            )}
            {createUnit == true ? (
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  {labelThree}
                </Form.Label>
                <Col sm="8">
                  <Form.Select
                    aria-label="Default select example"
                    value={uqc}
                    onChange={(e) => {
                      setUqc(e.target.value);
                    }}
                  >
                    <option value="Not Applicable">* Not Applicable</option>
                    <option value="BAG-BAGS">BAG-BAGS</option>
                    <option value="BOX-BOX">BOX-BOX</option>
                    <option value="BTL-BOTTLES">BTL-BOTTLES</option>
                    <option value="BAG-BAGS">KGS-KILOGRAMS</option>
                    <hr />
                  </Form.Select>
                  <Form.Text className="formText" onClick={handleCreateUQC}>
                    *New UQC
                  </Form.Text>
                </Col>
              </Form.Group>
            ) : (
              ""
            )}
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
      {/* ********************New UQC Creation Modal ************************* */}
      <Modal
        className="modalUQC"
        show={newUQC}
        onHide={handleCloseUQC}
        backdrop="static"
        keyboard={false}
        // style={{ width: "max-content", marginLeft: "40%" }}
      >
        <Modal.Header
        // closeButton
        >
          <Modal.Title>UQC Creation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4">
                UQC
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="text"
                  plaintext
                  placeholder="Type Group Name"
                  value={uqcName}
                  onChange={(e) => {
                    setUqcName(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" type="submit" onClick={handleSubmitUqc}>
            Submit
          </Button>
          <Button variant="danger" onClick={handleCloseUQC}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {/* ******************** //New UQC Creation Modal ************************* */}
    </div>
  );
}

export default CreateModal;
