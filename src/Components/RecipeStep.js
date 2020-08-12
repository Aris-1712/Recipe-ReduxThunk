import React, { useState, useEffect } from "react";

const RecipeStep = (props) => {
  const [step, setStep] = useState("");
  useEffect(() => {
    setStep("");
  }, [props.flag]);
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <label style={{ width: 100 }}>Add Steps</label>
        <textarea
          value={step}
          onChange={(event) => {
            setStep(event.target.value);
          }}
          style={{ flex: 1, padding: 10, fontFamily: "cursive", fontSize: 15 }}
          type="text"
        ></textarea>
      </div>
      <br></br>
      <span
      
        
      >
        <div  style={{ textAlign: "center" }}>
          <i onClick={() => {
          if (step !== "") {
            props.insert(step);
            setStep("");
          } else {
            alert("Please enter step details before adding");
          }
        }} style={{cursor:"pointer"}} className="fa fa-plus fa-2x" aria-hidden="true"></i>
        </div>
      </span>
    </div>
  );
};

export default RecipeStep;
