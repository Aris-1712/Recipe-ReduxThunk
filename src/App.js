import React from 'react';

import './App.css';
import RecipeContainer from './Components/RecipeContainer';


function App() {
  return (
    <div className="App" style={{marginLeft:30,marginRight:30}}>
      <h1 style={{textAlign:"center"}}>Recipe Web App</h1>
     
      <RecipeContainer></RecipeContainer>
 
    
    </div>
  );
}

export default App;
