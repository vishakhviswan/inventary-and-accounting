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
  Table,
  FormSelect,
} from "react-bootstrap";
import { SideBarContext, StockAlterContext } from "../store/SideMenuContext";
import { AuthContext, FirebaseContext } from "../store/Context";
import {
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import "./Components.css";

function CreateModal() {
  const { db } = useContext(FirebaseContext);
  const [gName, setGName] = useState("");
  const [gName2, setGName2] = useState("");
  const [under, setUnder] = useState("");
  const [unit, setUnit] = useState("");
  const [uqcName, setUqcName] = useState("");
  const [quantity, setQuantity] = useState();
  const [rate, setRate] = useState();
  const [value, setValue] = useState();
  const [lot, setLot] = useState("");



  const [godown, setGodown] = useState("");
  const [batch, setBatch] = useState("");
  const [mfgDt, setMfgDt] = useState("");
  const [expDt, setExpDt] = useState("");

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
    createItem,
    setCreateItem,
    titles,
    labelOne,
    labelTwo,
    labelThree,
    placeHolder,
    placeHolder2,
    isAlter,
    underSelection,
    setUnderSelection,
    phUnit,
    setPhUnit,
    phQty,
    phRate,
    setPhRate,
    phValue,
    setPhValue,
    phLot,
    setPhLot,
    showBatchModal,
    setShowBatchModal,
    phMfgDt,
    phExpDt,
    phGodown,
    phBatch,
  } = useContext(SideBarContext);

  const {
    alterGroup,
    alterCategory,
    alterItem,
    alterUnit,
    alterGodown,
    setShowDltModal,
    setPresentCollection,
    alterDate,
    setAlterDate,
  } = useContext(StockAlterContext);

  const handleClose = () => {
    setPhValue(null);
    setPhRate(null);
    setPhUnit(null);
    setPhLot(null);
    setUnderSelection(null);
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

  const handleCloseBatchModal = () => {
    setShowBatchModal(false);
  };

  // const handleShow = () => setShowCreate(true);

  // const [groupDetails, setGroupDetails] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [godownDetails, setGodownDetails] = useState([]);
  const [uqcDetails, setUqcDetails] = useState([]);
  const [unitDetails, setUnitDetails] = useState([]);
  // **************** Get From Firebase ***************************
  const { userDetails } = useContext(AuthContext);

  // useEffect(() => {
  //   const updateDate = () => {
  //     if (isAlter === true) {
  //       setAlterDate(true);
  //     }
  //   }
  //  updateDate()
  // }, [])

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
        uqc: unit,
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
      setShowBatchModal(true);
    }
  };

  const handleSubmitItem = async () => {
    const StockItemRef = await collection(db, "Stock Items");

    setDoc(doc(StockItemRef), {
      arrivedFrom: "Opening Balance",
      factory: userDetails.company,
      itemName: gName,
      under: under,
      unit: unit,
      quantity,
      rate,
      value,
      godown,
      batch,
      mfgDt,
      expDt,
      lot,
    })
      .catch((e) => {
        console.log(e);
        alert("Error :", e);
      })
      .then(() => {
        handleClose();
        alert("Item Added Successfull");
      });
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

  const handleDelete = async (e) => {
    e.preventDefault();

    if (alterGroup === true) {
      setPresentCollection("StockGroup");
      setShowDltModal(true);
    } else if (alterCategory === true) {
      setPresentCollection("StockCategory");
      setShowDltModal(true);
    } else if (alterItem === true) {
      setPresentCollection("Stock Items");
      setShowDltModal(true);
    } else if (alterUnit === true) {
      setPresentCollection("Units");
      setShowDltModal(true);
    } else if (alterGodown === true) {
      setPresentCollection("Godown");
      setShowDltModal(true);
    }
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
          <Form>
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
                  placeholder={placeHolder2 ? placeHolder2 : placeHolder}
                  value={gName}
                  onChange={(e) => {
                    setGName(e.target.value.toUpperCase());
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
                <Form.Label column sm="4">
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
                      <option
                        value={underSelection ? underSelection : "Primary"}
                      >
                        {underSelection ? underSelection : "Primary"}
                      </option>
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
                      <option
                        value={underSelection ? underSelection : "Primary"}
                      >
                        {underSelection ? underSelection : "Primary"}
                      </option>

                      {categoryDetails.map((obj) => (
                        <option value={obj.categoryName}>
                          {obj.categoryName}
                        </option>
                      ))}
                      <option value="none"> None</option>
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
                    onChange={(e) => {
                      setUnit(e.target.value);
                    }}
                  >
                    <option value="Not Applicable">
                      {underSelection ? underSelection : "Not Applicable"}
                    </option>
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
                    <option>{phUnit ? phUnit : "Not Applicable"}</option>
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
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="4">
                      Lot No.
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control
                        placeholder={phLot ? phLot : lot}
                        value={lot}
                        onChange={(e) => {
                          setLot(e.target.value);
                        }}
                        type="text"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Label column sm="4">
                    Quantity
                  </Form.Label>
                  <Col sm="8">
                    <InputGroup className="mb-3">
                      <FormControl
                        type="text"
                        placeholder={phQty}
                        aria-describedby="basic-addon2"
                        value={quantity}
                        onChange={(e) => {
                          setPhValue("");
                          setQuantity(e.target.value);
                        }}
                      />
                      <InputGroup.Text id="basic-addon2">
                        {unit ? unit : phUnit}
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="4">
                    Rate
                  </Form.Label>
                  <Col sm="8">
                    <InputGroup className="mb-3">
                      <FormControl
                        type="text"
                        placeholder={phRate ? phRate : "Type Rate......"}
                        aria-describedby="basic-addon2"
                        value={rate}
                        onChange={(e) => {
                          setPhValue("");
                          setRate(e.target.value);
                          findValue(e.target.value);
                        }}
                      />
                      <InputGroup.Text id="basic-addon2">
                        {`per ${unit ? unit : phUnit}`}
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
                <Form.Label column sm="4">
                  Value
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    disabled
                    placeholder={phValue ? phValue : value}
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
          {isAlter ? (
            <div>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Update
              </Button>

              <Button variant="danger" type="submit" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          ) : (
            <Button variant="success" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          )}
          <Button variant="info" onClick={handleClose}>
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
        className="batchModal"
        show={showBatchModal}
        onHide={handleCloseBatchModal}
        backdrop="static"
        keyboard={false}
        // style={{ width: "max-content", marginLeft: "40%" }}
      >
        <Modal.Header
        // closeButton
        >
          <Modal.Title className="batchTitle">
            <h5 className="batchHeading">{`Allocates of ${
              gName ? gName : placeHolder
            }`}</h5>
            <h5 className="batchHeading">{`for : ${
              quantity ? quantity : phQty
            } ${unit ? unit : phUnit}`}</h5>
            <h5 className="batchHeading">{`Lot No. : ${lot ? lot : phLot}`}</h5>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Godown</th>
                <th>Batch</th>
                <th>Mfg Dt</th>
                <th>Exp Dt</th>
                <th>Rate</th>
                <th>Qty</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FormSelect
                    value={godown}
                    onChange={(e) => {
                      setGodown(e.target.value);
                    }}
                  >
                    <option>{phGodown ? phGodown : "Main Location"}</option>
                    {godownDetails.map((obj) => (
                      <option>{obj.godownName}</option>
                    ))}
                  </FormSelect>
                </td>
                <td>
                  <FormControl
                    placeholder={phBatch ? phBatch : batch}
                    value={batch}
                    onChange={(e) => {
                      setBatch(e.target.value);
                    }}
                  />
                </td>
                {alterDate ? (
                  <td>
                    <FormControl
                      type="text"
                      placeHolder={phMfgDt}
                      onChange={() => {
                        setAlterDate(false);
                      }}
                    />
                  </td>
                ) : (
                  <td>
                    <FormControl
                      value={mfgDt}
                      onChange={(e) => {
                        setMfgDt(e.target.value);
                      }}
                      type="date"
                    />
                  </td>
                )}

                {alterDate ? (
                  <td>
                    <FormControl
                      placeHolder={phExpDt}
                      type="text"
                      onChange={() => {
                        setAlterDate(false);
                      }}
                    />
                  </td>
                ) : (
                  <td>
                    <FormControl
                      type="date"
                      placeHolder={phExpDt}
                      name="DOB"
                      onChange={(e) => {
                        setExpDt(e.target.value);
                      }}
                    />
                  </td>
                )}
                <td>
                  <InputGroup className="mb-3">
                    <FormControl
                      type="decimal"
                      aria-describedby="basic-addon2"
                      placeholder={rate ? rate : phRate}
                      onChange={(e) => {
                        setRate(e.target.value);
                      }}
                    />
                    <InputGroup.Text id="basic-addon2">
                      {unit ? unit : phUnit}
                    </InputGroup.Text>
                  </InputGroup>
                </td>
                <td>
                  <FormControl
                    placeHolder={quantity ? quantity : phQty}
                    type="number"
                  />
                </td>
                <td>
                  <FormControl
                    disabled
                    placeHolder={value ? value : phValue}
                  />
                </td>
              </tr>

              <tr>
                <td colSpan={5}>Total Qty :</td>
                <td>
                  <FormControl disabled value={quantity ? quantity : phQty} />
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>

        {isAlter ? (
          <Modal.Footer>
            <Button variant="primary">Update</Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="danger" onClick={handleCloseBatchModal}>
              Cancel
            </Button>
          </Modal.Footer>
        ) : (
          <Modal.Footer>
            <Button variant="success" type="submit" onClick={handleSubmitItem}>
              Submit
            </Button>
            <Button variant="danger" onClick={handleCloseBatchModal}>
              Cancel
            </Button>
          </Modal.Footer>
        )}
      </Modal>
      {/* ******************** //Batch Creation Modal ************************* */}
    </div>
  );
}

export default CreateModal;
