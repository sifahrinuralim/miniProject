import React from "react";
import "../Styles/StepperBox.css";

function StepperBox() {
  return (
    <div>
      <button className="button" href="#">
        <h4 style={{ color: "white" }}>Pengisian Data</h4>
      </button>{" "}
      <button className="button" href="#">
        <h4 style={{ color: "white" }}>Upload Dokumen</h4>
      </button>{" "}
      <button className="button" href="#">
        <h4 style={{ color: "white" }}>Ringkasan</h4>
      </button>
    </div>
  );
}

export default StepperBox;
