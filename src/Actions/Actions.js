
const AddRecipe=(obj)=>{
    
  return({
      type:"ADD",
      payLoad:obj
  })
}
export const AddRecipesAsync=(obj)=>{

  return((dispatch)=>{  
      console.log("HERE")     
      setTimeout(() => {
          dispatch(AddRecipe(obj))
      }, 1000);
      
  })
}
const RemRecipe=(obj)=>{
  
  return({
      type:"REM",
      payLoad:obj
  })
}
export const RemRecipesAsync=(obj)=>{

  return((dispatch)=>{  
      console.log("HERE")     
      setTimeout(() => {
          dispatch(RemRecipe(obj))
      }, 1000);
      
  })
}
const EditRecipe=(obj)=>{
  
  return({
      type:"EDIT",
      payLoad:obj
  })
}
export const EditRecipesAsync=(obj)=>{

  return((dispatch)=>{  
      console.log("HERE")     
      setTimeout(() => {
          dispatch(EditRecipe(obj))
      }, 1000);
      
  })
}