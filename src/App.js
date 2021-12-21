import React, { useEffect, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cutting from "./Pages/Cutting";
import SignIn from "./Pages/LoginPage";
import DashBoard from "./Pages/DashBoard";
import ListOfUsersPage from "./Pages/ListOfUsersPage";
import AddUsersPage from "./Pages/AddUsersPage";
import { AuthContext} from "./store/Context";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import InventoryPage from "./Pages/InventoryPage";

function App() {
  const auth = getAuth();
  const {setUser } = useContext(AuthContext);
  // const { fb } = useContext(FirebaseContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth,setUser]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route path="/cutting" element={<Cutting />} />
          <Route path="/addusers" element={<AddUsersPage />} />
          <Route path="/userslist" element={<ListOfUsersPage />} />
          <Route path="/inventory" element={<InventoryPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
