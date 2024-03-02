import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminlogin from "./components/login/Adminlogin";
import Home from "./components/Dashboard/Home/Home";
import Dashboard from "./components/Dashboard/Home/Dashboard";
import Create from "./components/Dashboard/Create";
import Detail from "./components/Dashboard/Detail";
import Edit from "./components/Dashboard/Edit";
import CustomizedDialogs from "./components/Popups/AddPopup";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Adminlogin />} />
          <Route exact path="/dashboard" element={<Dashboard />} />

          <Route path="/dashboard/create" element={<Create />}></Route>

          <Route path="/dashboard/details" element={<Detail />}></Route>
          <Route path="/dashboard/edit" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>


      
      {/* <Adminlogin />      */}
      {/* <Dashboard /> */}
      {/* <Create /> */}
      {/* <Detail /> */}
      {/* <Edit /> */}
    </div>
  );
}

export default App;
