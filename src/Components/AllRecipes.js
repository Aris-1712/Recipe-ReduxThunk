import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const AllRecipes = (props) => {
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(null);
  useEffect(() => {
    
    setList([...props.recipes]);
 
  }, [props.recipes]);
  useEffect(() => {
   
    setIndex(null);
  }, [props.flag]);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>All Recipes</h2>
      <br></br>
      <br></br>
      <div style={{ height: 500, overflowY: "scroll" }}>
        {list.map((obj, ind) => {
          return (
            <div
              
              key={ind}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 20,
                borderRadius: 20,
                backgroundColor: ind === index ? "#7BF1A8" : "#F3DE2C",
                marginBottom: 5,
              }}
            >
              <label onClick={() => {
                setIndex(ind);
                props.view({ id: ind, recipe: obj });
              }} style={{ width: "80%", fontSize: 20,cursor:"pointer" }}>
                {ind + 1}. {obj.name}
              </label>
              <div
                style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}
              >
                {" "}
                <span
                  onClick={() => {
                    props.del(ind);
                  }}
                  style={{ marginRight: 20,cursor:"pointer" }}
                >
                  <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                </span>
                <span
                  onClick={() => {
                    setIndex(ind);
                    props.edit({ id: ind, recipe: obj });
                  }}
                  style={{cursor:"pointer"}}
                >
                  <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    recipes: state.Recipes,
  };
};
export default connect(mapStateToProps)(AllRecipes);
