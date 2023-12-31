import React from "react";
import './App.css'
import Search from "./Components/Search";
import Favourite from "./Components/Favourite";
import Meals from "./Components/Meals";
import { AppContext } from "./context";
import Model from "./Components/Model";

function App(){
  
  let {model,favourite} = React.useContext(AppContext)

  return(
    <main>
      <Search />
      {favourite.length !== 0 && <Favourite />}
      <Meals />
      {model && <Model />}
    </main>
  )
}

export default App;