import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Card,
  FormControl,
  InputGroup,
  Modal,
  Table,
} from "react-bootstrap";
import { FirebaseContext } from "../store/Context";
import { SideBarContext, StockAlterContext } from "../store/SideMenuContext";

function AlterModal() {
  const { db } = useContext(FirebaseContext);
  const [title, setTitle] = useState("");
  const [masterList, setMasterList] = useState([]);
  const [showAlterPage, setShowAlterPage] = useState(false);
  const [value, setValue] = useState("");
  const [heading1, setHeading1] = useState("");
  const [heading2, setHeading2] = useState("");
  const [heading3, setHeading3] = useState("");
  const [heading4, setHeading4] = useState("");
  const [heading5, setHeading5] = useState("");
  const [heading6, setHeading6] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");
  const [data4, setData4] = useState("");
  const [data5, setData5] = useState("");
  const [data6, setData6] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const {
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
  } = useContext(StockAlterContext);

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
    showCreate,
    setShowCreate,
    setTitles,
    labelOne,
    setLabelOne,
    labelTwo,
    setLabelTwo,
    placeHolder,
    setPlaceHolder,
    isAlter,
    setIsAlter,
    underSelection,
    setUnderSelection,
    phUnit,
    setPhUnit,
    phQty,
    setPhQty,
    phRate,
    setPhRate,
    phValue,
    setPhValue,placeHolder2, setPlaceHolder2
  } = useContext(SideBarContext);
  const handleCloseAlter = () => {
    setShowAlter(false);
    window.location.reload();
  };

  const handleCloseAlterPage = () => {
    setShowAlterPage(false);
  };

  const handleOpenAlterPage = () => {
    setShowAlterPage(true);
  };

  useEffect(() => {
    const getCollection = async () => {
      if (alterGroup === true) {
        setTitle("List of Stock Group");
        const collectionData = await getDocs(collection(db, "StockGroup"));
        setMasterList(
          collectionData.docs.map((doc) => ({
            ...doc.data(),
          }))
        );
      } else if (alterCategory === true) {
        setTitle("List of Category Group");
        const collectionData = await getDocs(collection(db, "StockCategory"));
        setMasterList(
          collectionData.docs.map((doc) => ({
            ...doc.data(),
          }))
        );
      } else if (alterItem === true) {
        setTitle("List of Stock Items");
        const collectionData = await getDocs(collection(db, "Stock Items"));
        setMasterList(
          collectionData.docs.map((doc) => ({
            ...doc.data(),
          }))
        );
      } else if (alterUnit === true) {
        setTitle("List of Units");
        const collectionData = await getDocs(collection(db, "Units"));
        setMasterList(
          collectionData.docs.map((doc) => ({
            ...doc.data(),
          }))
        );
      } else if (alterGodown === true) {
        setTitle("List of Godowns");
        const collectionData = await getDocs(collection(db, "Godown"));
        setMasterList(
          collectionData.docs.map((doc) => ({
            ...doc.data(),
          }))
        );
      }
    };
    getCollection();
  }, [db, alterGroup, alterCategory, alterItem, alterUnit, alterGodown]);

  const onSelection = async (e) => {
    
    setValue(e.target.dataset.value);
    // console.log("aasdf", e.target.dataset.value);
    if (alterGroup === true) {
      const q = query(
        collection(db, "StockGroup"),
        where("groupName", "==", value)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const groupName = doc.data().groupName;
        const under = doc.data().under;

        console.log(doc.id, " => ", doc.data());
        setShowCreate(true);
        setTitles("Stock Group Alter");
        setLabelOne("Group Name");
        setLabelTwo("Under");
        setUnderSelection(under);
        setPlaceHolder(groupName);
        setIsAlter(true);
      });
    } else if (alterCategory === true) {
      const q = query(
        collection(db, "StockCategory"),
        where("categoryName", "==", value)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const categoryName = doc.data().categoryName;
        const under = doc.data().categoryUnder;

        console.log(doc.id, " => ", doc.data());
        setShowCreate(true);
        setTitles("Stock Category Alter");
        setLabelOne("Category Name");
        setLabelTwo("Under");
        setPlaceHolder(categoryName);
        setUnderSelection(under);
        setIsAlter(true);
      });
    } else if (alterItem === true) {
      const q = query(
        collection(db, "Stock Items"),
        where("itemName", "==", value)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const itemName = doc.data().itemName;
        const under = doc.data().under;
        const unit = doc.data().unit;
        const quantity = doc.data().quantity;
        const rate = doc.data().rate;
        const value = doc.data().value;

        console.log(doc.id, " => ", doc.data());
        setShowCreate(true);
        setCreateItem(true);
        setTitles("Stock Item Alter");
        setLabelOne("Item Name");
        setLabelTwo("Under");
        setLabelThree("Units");
        setPlaceHolder(itemName);
        setUnderSelection(under);
        setPhUnit(unit);
        setPhQty(quantity);
        setPhRate(rate);
        setPhValue(value);
        setIsAlter(true);
      });
    } else if (alterUnit === true) {
      const q = query(collection(db, "Units"), where("symbol", "==", value));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const symbol = doc.data().symbol;
        const formalName = doc.data().formalName;
        const uqc = doc.data().uqc;

        console.log(doc.id, " => ", doc.data());

        setShowCreate(true);
        setCreateUnit(true);
        setTitles("Unit Alter");
        setLabelOne("Symbol");
        setLabelTwo("Formal Name");
        setLabelThree("Unit Quantity Code (UQC)");
        setPlaceHolder(formalName);
        setPlaceHolder2(symbol);
        setUnderSelection(uqc);
        // setUnderSelection(under);
        setIsAlter(true);
      });
    } else if (alterGodown === true) {
      const q = query(collection(db, "Godown"), where("godownName", "==", value));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const godownName = doc.data().godownName;
        const under = doc.data().under;

        console.log(doc.id, " => ", doc.data());
       
        setShowCreate(true);
        setCreateGodown(true);
        setTitles("Godown Alter");
        setLabelOne("Godown Name");
        setLabelTwo("Under");
        setPlaceHolder(godownName);
        setUnderSelection(under);
      });
    } else {
      alert("erorrrrrrrrrrrrrrrrrrrrrrrrr");
    }
  };
  console.log(heading1, heading2, data1, data2);
  return (
    <div className="alterModal_parentDiv">
      <Modal
        show={showAlter}
        onHide={handleCloseAlter}
        backdrop="static"
        keyboard={false}
        //  style={{ width: "max-content", marginLeft: "40%" }}
      >
        <Modal.Header>
          <Modal.Title className="text-Title">{title} </Modal.Title>
        </Modal.Header>
        {alterGroup ? (
          <Modal.Body>
            {masterList.map((obj, i) => (
              <Card.Text
                className="text-items"
                key={i}
                data-value={obj.groupName}
                onClick={(e) => {
                  onSelection(e);
                }}
              >
                {obj.groupName}
              </Card.Text>
            ))}
          </Modal.Body>
        ) : (
          ""
        )}

        {alterCategory ? (
          <Modal.Body>
            {masterList.map((obj, i) => (
              <Card.Text
                className="text-items"
                key={i}
                data-value={obj.categoryName}
                onClick={(e) => {
                  onSelection(e);
                }}
              >
                {obj.categoryName}
              </Card.Text>
            ))}
          </Modal.Body>
        ) : (
          ""
        )}

        {alterItem ? (
          <Modal.Body>
            {masterList.map((obj, i) => (
              <Card.Text
                className="text-items"
                key={i}
                data-value={obj.itemName}
                onClick={(e) => {
                  onSelection(e);
                }}
              >
                {obj.itemName}
              </Card.Text>
            ))}
          </Modal.Body>
        ) : (
          ""
        )}

        {alterUnit ? (
          <Modal.Body>
            {masterList.map((obj, i) => (
              <Card.Text
                className="text-items"
                key={i}
                data-value={obj.symbol}
                onClick={(e) => {
                  onSelection(e);
                }}
              >
                {obj.symbol}
              </Card.Text>
            ))}
          </Modal.Body>
        ) : (
          ""
        )}

        {alterGodown ? (
          <Modal.Body>
            {masterList.map((obj, i) => (
              <Card.Text
                className="text-items"
                key={i}
                data-value={obj.godownName}
                onClick={(e) => {
                  onSelection(e);
                }}
              >
                {obj.godownName}
              </Card.Text>
            ))}
          </Modal.Body>
        ) : (
          ""
        )}
        <Modal.Footer>
          {/* <Button variant="success" type="submit" onClick={handleSubmit}>
              Submit
            </Button> */}
          <Button variant="danger" onClick={handleCloseAlter}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ****************Alter Modal********************************* */}
      {/* <Modal
        className="alterModal"
        show={showAlterPage}
        onHide={handleCloseAlterPage}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Alterjklbnn</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Old Data</th>
                <th>New Data</th>
              </tr>
            </thead>
            {alterGroup ? (
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{heading1}</td>
                  <td>{data1}</td>
                  <td>
                    <FormControl placeholder={data1} />
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>{heading2} </td>
                  <td>{data2} </td>
                  <td>
                    <FormControl placeholder={data2} />
                  </td>
                </tr>
              </tbody>
            ) : (
              ""
            )}
            {alterCategory ? (
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{heading1}</td>
                  <td>{data1}</td>
                  <td>
                    <FormControl placeholder={data1} />
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>{heading2} </td>
                  <td>{data2} </td>
                  <td>
                    <FormControl placeholder={data2} />
                  </td>
                </tr>
              </tbody>
            ) : (
              ""
            )}
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit">
            Submit
          </Button>
          <Button variant="danger" onClick={handleCloseAlterPage}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default AlterModal;
