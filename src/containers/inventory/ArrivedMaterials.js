import React from "react";
import RcnArrival from "../../Components/RcnArrival";

import "./ArrivedMaterials.css";

function ArrivedMaterials() {
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
       <RcnArrival/>
      </div>
    </div>
  );
}

export default ArrivedMaterials;
