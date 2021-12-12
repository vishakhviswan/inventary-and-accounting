import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cutting from './Pages/Cutting';
import SignIn from './Pages/SignInPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn/> } />
          <Route path="/cutting" element={<Cutting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
