// ********New**********
import React, { useContext, useState, useEffect } from "react";
import {
  Modal,
  Button,
  Col,
  Form,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { SideBarContext } from "../store/SideMenuContext";
import { AuthContext, FirebaseContext } from "../store/Context";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import "./Components.css";

function CreateModal() {
  const { db } = useContext(FirebaseContext);
  const [gName, setGName] = useState("");
  const [gName2, setGName2] = useState("");
  const [under, setUnder] = useState("");
  const [unit, setUnit] = useState("");
  const [uqc, setUqc] = useState("");
  const [uqcName, setUqcName] = useState("");
  const [quantity, setQuantity] = useState();
  const [rate, setRate] = useState();
  const [value, setValue] = useState();

  const [items2, setItems2] = useState(false);

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
    createItem,
    setCreateItem,
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
    setUnit(null);
    setShowCreate(false);
    setCreateCategory(false);
    setCreateGroup(false);
    setCreateUnit(false);
    setCreateItem(false);
    window.location.reload();
  };
  const handleCloseUQC = () => {
    setNewUQC(false);
  };

  // const handleShow = () => setShowCreate(true);

  // const [groupDetails, setGroupDetails] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [godownDetails, setGodownDetails] = useState([]);
  const [uqcDetails, setUqcDetails] = useState([]);
  const [unitDetails, setUnitDetails] = useState([]);
  // **************** Get From Firebase ***************************
  const { userDetails } = useContext(AuthContext);

  useEffect(() => {
    const getUqc = async () => {
      const uqcData = await getDocs(collection(db, "UQC"));
      setUqcDetails(
        uqcData.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };

    const getUnits = async () => {
      const unitData = await getDocs(collection(db, "Units"));
      setUnitDetails(
        unitData.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };

    const getCategory = async () => {
      const categoryData = await getDocs(collection(db, "StockCategory"));
      setCategoryDetails(
        categoryData.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };

    const getGodown = async () => {
      const GodownData = await getDocs(collection(db, "Godown"));
      setGodownDetails(
        GodownData.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };
    getUqc();
    getUnits();
    getCategory();
    getGodown();
  }, [db]);
  console.log("GodownDetails", userDetails.company);
  const handleSubmit = async (e) => {
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
        alert("Unit Created sucsessfull");
      });
    } else if (createGodown === true) {
      const StockGodownRef = await collection(db, "Godown");

      setDoc(doc(StockGodownRef), {
        //,general
        factory: userDetails.company,
        godownName: gName,
        under: under,
      })
        .catch((e) => {
          console.log(e);
          alert("error", e);
        })
        .then(() => {
          handleClose();
          alert("Godown Created successfull");
        });
    } else if (createItem === true) {
      const StockItemRef = await collection(db, "Stock Items");

      setDoc(doc(StockItemRef), {
        arrivedFrom:"Opening Balance",
        factory: userDetails.company,
        itemName: gName,
        under: under,
        unit: unit,
        quantity,
        rate,
        value,
        
      }).catch((e) => {
        console.log(e);
        alert("Error :",e)
      }).then(() => {
        handleClose();
        alert("Item Added Successfull")
      })
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

  const findValue = (rate) => {
    const totalValue = rate * quantity;
    setValue(totalValue);
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
            {/* **************************gName Input***************************** */}
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
            {/* **************************gName2 Input unit***************************** */}
            {createUnit === true ? (
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
              // * ************************** under options***************************** *
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  {labelTwo}
                </Form.Label>
                <Col sm="8">
                  {createGodown === true ? (
                    <Form.Select
                      aria-label="Default select example"
                      value={under}
                      onChange={(e) => {
                        setUnder(e.target.value);
                      }}
                    >
                      <option value="abc">*Primary</option>
                      {godownDetails.map((obj) => (
                        <option>{obj.godownName}</option>
                      ))}
                    </Form.Select>
                  ) : (
                    <Form.Select
                      aria-label="Default select example"
                      value={under}
                      onChange={(e) => {
                        setUnder(e.target.value);
                      }}
                    >
                      <option value="abc">Primary</option>

                      {categoryDetails.map((obj) => (
                        <option value={obj.categoryName}>
                          {obj.categoryName}
                        </option>
                      ))}
                    </Form.Select>
                  )}
                </Col>
              </Form.Group>
            )}
            {createUnit === true ? (
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
                    value={unit}
                    onChange={(e) => {
                      setUnit(e.target.value);
                    }}
                  >
                    <option value="Not Applicable">Not Applicable</option>

                    <option value="BAG-BAGS">BAG-BAGS</option>
                    <option value="BOX-BOX">BOX-BOX</option>
                    <option value="BTL-BOTTLES">BTL-BOTTLES</option>
                    <option value="KGS-KILOGRAMS">KGS-KILOGRAMS</option>
                    {uqcDetails.map((obj) => (
                      <option>{obj.uqcName} </option>
                    ))}
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
            {createItem === true ? (
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
                    value={unit}
                    onChange={(e) => {
                      setUnit(e.target.value);
                    }}
                  >
                    <option value="Not Applicable">* Not Applicable</option>
                    {unitDetails.map((obj) => (
                      <option>{`${obj.symbol}`} </option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
            ) : (
              ""
            )}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <hr />
          {createItem === true ? (
            <Form>
              <Row>
                <Modal.Title>Opening Balance</Modal.Title>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label placeholder="Type Group Name ..." column sm="4">
                    Quantity
                  </Form.Label>
                  <Col sm="8">
                    <InputGroup className="mb-3">
                      <FormControl
                        type="text"
                        placeholder="Type Quantiny......"
                        aria-describedby="basic-addon2"
                        value={quantity}
                        onChange={(e) => {
                          setQuantity(e.target.value);
                        }}
                      />
                      <InputGroup.Text id="basic-addon2">
                        {unit ? unit : "unit"}
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label placeholder="Type Group Name ..." column sm="4">
                    Rate
                  </Form.Label>
                  <Col sm="8">
                    <InputGroup className="mb-3">
                      <FormControl
                        type="text"
                        placeholder="Type Rate......"
                        aria-describedby="basic-addon2"
                        value={rate}
                        onChange={(e) => {
                          setRate(e.target.value);
                          findValue(e.target.value);
                        }}
                      />
                      <InputGroup.Text id="basic-addon2">
                        {`per ${unit}`}
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form.Group>
              </Row>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label placeholder="Type Group Name ..." column sm="4">
                  Value
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    disabled
                    placeholder={value}
                    value={value}
                    type="text"
                  />
                </Col>
              </Form.Group>
            </Form>
          ) : (
            ""
          )}
          <hr />
        </Modal.Footer>
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

      {/* ********************Batch Creation Modal ************************* */}
      <Modal
        className="modalUQC"
        show={items2}
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
      {/* ******************** //Batch Creation Modal ************************* */}
    </div>
  );
}

export default CreateModal;
