import React, { useState } from "react";
import RecipeStep from "./RecipeStep";
import Steps from "./Steps";
import AllRecipes from "./AllRecipes";
import EditRecipe from "./EditRecipe";
import * as Actions from "../Actions/Actions";
import { connect } from "react-redux";
import "./style.css";
import ViewRecipe from "./ViewRecipe";
const RecipeContainer = (props) => {
 
  const [name, setName] = useState("");
  const [view, setView] = useState(false);
  const [steps, setStep] = useState([]);
  const [cancelFlag, setCancelFlag] = useState(false);
  const [cancelEditFlag, setCancelEditFlag] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editObj, setEditObj] = useState({ id: null, recipe: {} });
  const insertSteps = (obj) => {
    setStep((old) => {
      return [...old, obj];
    });
  };
  const editRecipes = (obj) => {
    setView(false)
    setEdit(false);
    props.edit(obj);
    setCancelEditFlag(!cancelEditFlag);
   
  };
  const cancelEdit = () => {
   
    setEdit(false);
    setView(false)
    setCancelEditFlag(!cancelEditFlag);
  };
  const removeStep = (obj) => {
    let temp = [...steps];
    temp.splice(obj, 1);
    setStep([...temp]);
  };
  const addRecipe = () => {
    if (name !== "" && steps.length !== 0) {
      let recipe = { name: "", steps: [] };
      recipe.name = name;
      recipe.steps = [...steps];
      props.add(recipe);
    
      setName("");
      setStep([]);
    } else {
      alert("Please enter Recipe name and add atleast 1 step");
    }
  };
  const cancel = () => {
    setName("");
    setStep([]);
    setCancelFlag(!cancelFlag);
  };
  const removeRecipe = (obj) => {
  
    props.rem(obj);
    setEdit(false)
    setView(false)
    setCancelEditFlag(!cancelEditFlag);
  };
  const editHandler = (obj) => {
    setEdit(true);
    setEditObj(obj);
  };
  const viewAllHandler = (obj) => {
    setEdit(false)
    setView(true);
    setEditObj(obj);
  };
  const viewHandler = () => {
    setView(true);
    setCancelEditFlag(!cancelEditFlag);
  };
  const viewCancelHandler = () => {
    setView(false);
    setCancelEditFlag(!cancelEditFlag);
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div className="container1">
        {edit ? (
          <EditRecipe
            editRecipe={(obj) => {
              editRecipes(obj);
            }}
            editObj={editObj}
            cancelEdit={cancelEdit}
          ></EditRecipe>
        ) : view ? (
          <ViewRecipe viewObj={editObj} viewSwitch={viewCancelHandler}></ViewRecipe>
        ) : (
          <div>
            <h2 style={{ textAlign: "center" }}>Recipe Creator</h2>
            <br></br>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <label style={{ width: 100 }}>Recipe Name:</label>
              <input
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                style={{
                  flex: 1,
                  padding: 10,
                  fontFamily: "cursive",
                  fontSize: 15,
                }}
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
                onClick={addRecipe}
                style={{
                  width: 100,
                  backgroundColor: "#D0FD5D",
                  borderColor: "transparent",
                  padding: 10,
                  fontWeight: "bold",
                  borderRadius: 10,
                }}
              >
                ADD
              </button>
              <button
                onClick={cancel}
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
        )}
      </div>
      <hr></hr>
      <div className="container2">
        <AllRecipes
          viewSwitch={viewHandler}
          edit={(obj) => editHandler(obj)}
          del={(obj) => removeRecipe(obj)}
          view={(obj) => viewAllHandler(obj)}
   
          flag={cancelEditFlag}
        ></AllRecipes>
      </div>
    </div>
  );
};
const mapPropsToState = (state) => {
  return {
    recipes: state.Recipes,
  };
};
const mapPropsToActions = (dispatch) => {
  return {
    add: (obj) => dispatch(Actions.AddRecipesAsync(obj)),
    rem: (obj) => dispatch(Actions.RemRecipesAsync(obj)),
    edit: (obj) => dispatch(Actions.EditRecipesAsync(obj)),
  };
};
export default connect(mapPropsToState, mapPropsToActions)(RecipeContainer);
