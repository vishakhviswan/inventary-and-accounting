import React, { useEffect, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/LoginPage";
import DashBoardPage from "./Pages/DashBoardPage";
import ListOfUsersPage from "./Pages/ListOfUsersPage";
import AddUsersPage from "./Pages/AddUsersPage";
import { AuthContext, FirebaseContext } from "./store/Context";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import ArrivedMaterialsPage from "./Pages/inventory/ArrivedMaterialsPage";
import StockRegisterPage from "./Pages/inventory/StockRegisterPage";
import { useNavigate } from "react-router-dom";
import ProcessingPage from "./Pages/inventory/ProcessingPage";
import CreateStockPage from "./Pages/inventory/CreateStockPage";
import TypeAhead from "./Components/TypeAhead";
import InventoryPage from "./Pages/InventoryPage";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";

function App() {
  //const navigate = useNavigate();
  const auth = getAuth();
  const { setUserDtls, userDtls, userDetails, setUserDetails } =
    useContext(AuthContext);

  const { db } = useContext(FirebaseContext);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setUserDtls(user);
      if (user) {
        console.log("userApp", user.uid);
        const userRef = doc(db, "users", user.uid);

        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log("Document data:", docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }
    });
  }, [auth, setUserDtls]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={userDtls ? <DashBoardPage /> : <SignIn />}
          />{" "}
          {/* start work 24-01-2020,,finish Designing */}
          <Route exact path="/inventory" element={<InventoryPage />} />{" "}
          {/* start work 25-01-2020 12:44 AM, */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/processing" element={<ProcessingPage />} />
          <Route path="/stockcreate" element={<CreateStockPage />} />
          <Route path="/addusers" element={<AddUsersPage />} />
          <Route path="/userslist" element={<ListOfUsersPage />} />
          <Route path="/arrivedmaterials" element={<ArrivedMaterialsPage />} />
          <Route path="/stockreg" element={<StockRegisterPage />} />
          <Route path="/test" element={<TypeAhead />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
