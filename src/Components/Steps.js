import React, { useEffect, useState } from "react";

const Steps = (props) => {
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    setSteps([...props.steps]);
  }, [props.steps]);

  return (
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
              style={{ width: "80%", fontSize: 20, wordWrap: "break-word" }}
            >
              {ind + 1}. {obj}
            </label>
            <div
              style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}
            >
              {" "}
              <span
              style={{cursor:"pointer"}}
                onClick={() => {
                  props.del(ind);
                }}
              >
                <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
