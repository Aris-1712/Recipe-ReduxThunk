import React, { useState, useEffect } from "react";

const ViewRecipe = (props) => {
  const [steps, setStep] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState();

  useEffect(() => {
    setId(props.viewObj.id);
    setName(props.viewObj.recipe.name);
    setStep(props.viewObj.recipe.steps);
  }, [props.viewObj]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Recipe</h2>
      <br></br>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label style={{ width: 120 }}>Recipe Name:</label>
        <label style={{ flex: 1 }}>{name}</label>
      </div>
      <br></br>
      <div>
        <label>Steps:</label>
      </div>
      <br></br>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: 280,
          overflowY: "scroll",
        }}
      >
        {steps.map((obj, ind) => {
          return (
            <div
              key={ind}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 20,
                borderRadius: 20,
                backgroundColor: "#FFBF69",
                marginBottom: 5,
              }}
            >
              <label
                style={{ width: "100%", fontSize: 20, wordWrap: "break-word" }}
              >
                {ind + 1}. {obj}
              </label>
              
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={props.viewSwitch}
          style={{
            width: 100,
            backgroundColor: "#FF5964",
            borderColor: "transparent",
            padding: 10,
            fontWeight: "bold",
            borderRadius: 10,
          }}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};
export default ViewRecipe;
