import React, {useContext,} from "react";
import { AppContext } from "../App";


function Key({KeyVal , bigKey}) { 
  const {onSelectLetter, onDelete, onEnter} = useContext(AppContext);

  const selectLetter = () =>{
    if(KeyVal==="ENTER"){
      onEnter();
    }
    else if(KeyVal ==="DELETE"){
      onDelete();
    }
    else{
      onSelectLetter(KeyVal);
    }
  
  }
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>{KeyVal} </div>
  )
}

export default Key;