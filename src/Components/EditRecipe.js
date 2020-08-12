import React, { useState, useEffect } from "react";
import Steps from "./Steps";
import RecipeStep from "./RecipeStep";
const EditRecipe = (props) => {
  const [steps, setStep] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState();
  const [cancelFlag, setCancelFlag] = useState(false);
  useEffect(() => {
    setId(props.editObj.id);
    setName(props.editObj.recipe.name);
    setStep(props.editObj.recipe.steps);
  }, [props.editObj]);
  const insertSteps = (obj) => {
    setStep((old) => {
      return [...old, obj];
    });
  };
  const removeStep = (obj) => {
    let temp = [...steps];
    temp.splice(obj, 1);
    setStep([...temp]);
  };
  const edit = () => {
    if (name !== "" && steps.length !== 0) {
      props.editRecipe({ id: id, name: name, steps: steps });
    } else {
      alert("Please enter Recipe name and add atleast 1 step");
    }
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Recipe Edit</h2>
      <br></br>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label style={{ width: 100 }}>Recipe Name:</label>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
          style={{ flex: 1, padding: 10 }}
          type="text"
        ></input>
      </div>
      <br></br>
      <RecipeStep
        flag={cancelFlag}
        insert={(obj) => {
          insertSteps(obj);
        }}
      ></RecipeStep>
      <br></br>
      <Steps
        del={(obj) => {
          removeStep(obj);
        }}
        steps={steps}
      ></Steps>
      <br></br>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button
          style={{
            width: 100,
            backgroundColor: "#D0FD5D",
            borderColor: "transparent",
            padding: 10,
            fontWeight: "bold",
            borderRadius: 10,
          }}
          onClick={edit}
        >
          SAVE
        </button>
        <button
          onClick={() => {
            props.cancelEdit();
          }}
          style={{
            width: 100,
            backgroundColor: "#FF5964",
            borderColor: "transparent",
            padding: 10,
            fontWeight: "bold",
            borderRadius: 10,
          }}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default EditRecipe;
