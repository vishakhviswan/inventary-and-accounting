import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { FirebaseContext } from "../store/Context";
import "./UsersList.css";
function UsersList() {
  const [userDetails, setUserDetails] = useState([]);
  const { db } = useContext(FirebaseContext);
  useEffect(() => {
    const getUsers = async () => {
      const userData = await getDocs(collection(db, "users"));
      setUserDetails(
        userData.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
      console.log("users", userData);
    };
    getUsers();
  }, [db]);
  console.log("hello", userDetails);

  return (
    <div className="usersList_ParentDiv">
      <div className="usersList_ChildDiv">
        <Container>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Company</th>
                <th>Mobile #</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            {userDetails.map((obj, index) => (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{obj.username}</td>
                  <td>{obj.designation}</td>
                  <td>{obj.company}</td>
                  <td>{obj.mobile}</td>
                  <td>{obj.email}</td>
                  <td>
                    <Button variant="info">Edit</Button>
                  </td>
                  <td>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Container>
      </div>
    </div>
  );
}

export default UsersList;
