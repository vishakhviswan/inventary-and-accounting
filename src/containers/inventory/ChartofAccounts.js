import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../store/Context";
import { StockAlterContext } from "../../store/SideMenuContext";

function ChartofAccounts() {
  const navigate = useNavigate();
  const {
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
  const { db } = useContext(FirebaseContext);

  const [masterList1, setMasterList1] = useState([]);
  const [title1, setTitle1] = useState("");

  useEffect(async () => {
    if (listShow) {
      if (listGroup === true) {
        setTitle1("List of Stock Group");
        const collectionData = await getDocs(collection(db, "StockGroup"));
        setMasterList1(
          collectionData.docs.map((doc) => ({
            ...doc.data(),
          }))
        );
      } else if (listCategory === true) {
        setTitle1("List of Category Group");
        const collectionData = await getDocs(collection(db, "StockCategory"));
        setMasterList1(
          collectionData.docs.map((doc) => ({
            ...doc.data(),
          }))
        );
      } else if (listItem === true) {
        setTitle1("List of Stock Items");
        const collectionData = await getDocs(collection(db, "Stock Items"));
        setMasterList1(
          collectionData.docs.map((doc) => ({
            ...doc.data(),
          }))
        );
      } else if (listUnit === true) {
        setTitle1("List of Units");
        const collectionData = await getDocs(collection(db, "Units"));
        setMasterList1(
          collectionData.docs.map((doc) => ({
            ...doc.data(),
          }))
        );
      } else if (listGodown === true) {
        setTitle1("List of Godowns");
        const collectionData = await getDocs(collection(db, "Godown"));
        setMasterList1(
          collectionData.docs.map((doc) => ({
            ...doc.data(),
          }))
        );
      }
    } else {
      alert("Invalid Selection");
      navigate("/inventory");
    }
  }, [db, listGroup, listCategory, listItem, listUnit, listGodown]);
  console.log("maslist", masterList1, listGroup);
  return (
    <div>
      <Container pt={5} className="pt-5">
        {listGroup ? (
          <ListGroup as="ol" numbered>
            <ListGroup.Item variant="primary">{title1}</ListGroup.Item>
            {masterList1.map((obj) => (
              <ListGroup.Item action as="li">
                {obj.groupName}
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          ""
        )}
        {listCategory ? (
          <ListGroup as="ol" numbered>
            <ListGroup.Item variant="primary">{title1}</ListGroup.Item>
            {masterList1.map((obj) => (
              <ListGroup.Item as="li" action>
                {obj.categoryName}
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          ""
        )}
        {listItem ? (
          <ListGroup as="ol" numbered>
            <ListGroup.Item variant="primary">{title1}</ListGroup.Item>
            {masterList1.map((obj) => (
              <ListGroup.Item as="li" action>
                {obj.itemName}
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          ""
        )}

        {listUnit ? (
          <ListGroup as="ol" numbered>
            <ListGroup.Item variant="primary">{title1}</ListGroup.Item>
            {masterList1.map((obj) => (
              <ListGroup.Item as="li" action>
                {obj.symbol ? `${obj.symbol}-${obj.formalName}` : ""}
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          ""
        )}

        {listGodown ? (
          <ListGroup as="ol" numbered>
            <ListGroup.Item variant="primary">{title1}</ListGroup.Item>
            {masterList1.map((obj) => (
              <ListGroup.Item as="li" action>
                {obj.godownName}
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          ""
        )}
        {masterList1.length === 0 ? (
          <ListGroup as="ol" numbered>   
              <ListGroup.Item as="li" action>
                {title1} is Empty!
              </ListGroup.Item>
          </ListGroup>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}

export default ChartofAccounts;
