import React, { useContext, useEffect, useState } from "react";
import CkArrival from "../../Components/CkArrival";
import MpArrival from "../../Components/MpArrival";
import PkArrivals from "../../Components/PkArrivals";
import RcnArrival from "../../Components/RcnArrival";
import { SideBarContext } from "../../store/SideMenuContext";
import { TopBarContext } from "../../store/ArrivalsContext";
import "./ArrivedMaterials.css";

function ArrivedMaterials() {
  const { recived } = useContext(TopBarContext);

  // const [value, setValue] = useState()
  // if (recived == "Row Cashew Nuts") {
  //   setValue("Row Cashew Nuts");
  // } else if (recived == "Cutting Kernels") {
  //   setValue("Cutting Kernels");
  // }
  //const [arrived, setArrived] = useState()

  // const sidebar1 = sidebar;
  // useEffect(() => {

  //   // if () { }
  //   // else if(){}
  //   return () => {

  //   }
  // }, [])
  // const [number, setNumber] = useState(0);

  // function handleEnter(event) {
  //   if (event.keyCode === 13) {
  //     const form = event.target.form;
  //     const index = Array.prototype.indexOf.call(form, event.target);
  //     form.elements[index + 1].focus();
  //     event.preventDefault();
  //   } else if (event.keyCode === 37) {
  //     const form = event.target.form;
  //     const index = Array.prototype.indexOf.call(form, event.target);
  //     form.elements[index - 1].focus();
  //     event.preventDefault();
  //   } else if (event.keyCode === 40) {
  //     setNumber(number + 1);
  //     event.preventDefault();
  //   } else if (event.keyCode === 46) {
  //     setNumber(number - 1);
  //     event.preventDefault();
  //   } else if (event.keyCode === 39) {
  //     const form = event.target.form;
  //     const index = Array.prototype.indexOf.call(form, event.target);
  //     form.elements[index + 1].focus();
  //     event.preventDefault();
  //     console.log(form);
  //   }
  // }

  return (
    <div className="arrived_ParentDiv">
      <div className="arrived_ChildDiv">
        <PkArrivals />
        {recived == "Row Cashew Nuts" ? <RcnArrival /> : ""}
        {recived == "Cutting Kernels" ? <CkArrival /> : ""}
        {recived == "Peeling Machine" ? <MpArrival /> : ""}
        {recived == "Peeled Kernels" ? <PkArrivals /> : ""}
      </div>
    </div>
  );
}

export default ArrivedMaterials;
