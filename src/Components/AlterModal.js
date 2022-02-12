import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { FirebaseContext } from "../store/Context";
import { SideBarContext, StockAlterContext } from "../store/SideMenuContext";

function AlterModal() {
  const { db } = useContext(FirebaseContext);
  const [title, setTitle] = useState("");
  const [masterList, setMasterList] = useState([]);
  const [value, setValue] = useState("");

  const {
    showAlter,
    setShowAlter,
    alterGroup,
    alterCategory,
    alterItem,
    alterUnit,
    alterGodown,
    setDocId,
    setDltTitle,
    setDltBody,
    setAlterDate,
  } = useContext(StockAlterContext);

  const {
    setLabelThree,
    setCreateUnit,
    setCreateGodown,
    setCreateItem,
    setShowCreate,
    setTitles,
    setLabelOne,
    setLabelTwo,
    setPlaceHolder,
    setIsAlter,
    setUnderSelection,
    setPhUnit,
    setPhQty,
    setPhRate,
    setPhValue,
    setPlaceHolder2,
    setPhLot,
    setPhMfgDt,
    setphExpDt,
    setPhGodown,
    setPhBatch,
  } = useContext(SideBarContext);
  const handleCloseAlter = () => {
    setShowAlter(false);
    window.location.reload();
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
        const docId = doc.id;

        console.log(doc.id, " => ", doc.data());
        setShowCreate(true);
        setTitles("Stock Group Alter");
        setLabelOne("Group Name");
        setLabelTwo("Under");
        setUnderSelection(under);
        setPlaceHolder(groupName);
        setIsAlter(true);
        setDocId(docId);
        setDltTitle("Delete Stock Group");
        setDltBody(`Are you sure you want to delete ${groupName}  ?`);
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
        const docId = doc.id;
        console.log(doc.id, " => ", doc.data());
        setShowCreate(true);
        setTitles("Stock Category Alter");
        setLabelOne("Category Name");
        setLabelTwo("Under");
        setPlaceHolder(categoryName);
        setUnderSelection(under);
        setIsAlter(true);
        setDocId(docId);
        setDltTitle("Delete Stock Category");
        setDltBody(`Are you sure you want to delete ${categoryName}  ?`);
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
        const lot = doc.data().lot;
        const godown = doc.data().godown;
        const batch = doc.data().batch;
        const mfgDt = doc.data().mfgDt
        const expDt =doc.data().expDt
        const docId = doc.id;


        console.log(doc.id, " => ", doc.data());
        setShowCreate(true);
        setCreateItem(true);
        setPhGodown(godown)
        setPhBatch(batch)
        setPhMfgDt(mfgDt)
        setphExpDt(expDt)
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
        setPhLot(lot);
        setAlterDate(true)
        setDocId(docId);
        setDltTitle("Delete Stock Item");
        setDltBody(`Are you sure you want to delete ${itemName}  ?`);
      });
    } else if (alterUnit === true) {
      const q = query(collection(db, "Units"), where("symbol", "==", value));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const symbol = doc.data().symbol;
        const formalName = doc.data().formalName;
        const uqc = doc.data().uqc;
        const docId = doc.id;
        
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
        setDocId(docId);
        setDltTitle("Delete Unit");
        setDltBody(
          `Are you sure you want to delete ${symbol}-${formalName}  ?`
        );
      });
    } else if (alterGodown === true) {
      const q = query(
        collection(db, "Godown"),
        where("godownName", "==", value)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const godownName = doc.data().godownName;
        const under = doc.data().under;
        const docId = doc.id;
        
        console.log(doc.id, " => ", doc.data());

        setShowCreate(true);
        setCreateGodown(true);
        setTitles("Godown Alter");
        setLabelOne("Godown Name");
        setLabelTwo("Under");
        setPlaceHolder(godownName);
        setUnderSelection(under);
        setDocId(docId);
        setIsAlter(true);
        setDltTitle("Delete Godown");
        setDltBody(`Are you sure you want to delete ${godownName}  ?`);
      });
    } else {
      alert("erorrrrrrrrrrrrrrrrrrrrrrrrr");
    }
  };
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
