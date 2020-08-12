const initialState = {
  Recipes: [],
};

const Reducer = (state = initialState, Action) => {
  
  if (Action.type === "ADD") {
    
    return { ...state, Recipes: [...state.Recipes, Action.payLoad] };
  }
  if (Action.type === "REM") {
    let temp = [...state.Recipes];
    temp.splice(Action.payLoad, 1);
    return { ...state, Recipes: [...temp] };
  }
  if (Action.type === "EDIT") {
    let temp = [...state.Recipes];
    temp.splice(Action.payLoad.id, 1, {
      name: Action.payLoad.name,
      steps: Action.payLoad.steps,
    });
    return { ...state, Recipes: [...temp] };
  }
  return state;
};
export default Reducer;
