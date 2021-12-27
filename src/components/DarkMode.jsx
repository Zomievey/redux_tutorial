import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { darkMode } from "../features/theme";



function DarkMode() {
  const dispatch = useDispatch();
  const [darkModeState, setDarkModeState] = useState(false);

 

    
    
  return (
    <div>
      <button onClick={() => dispatch(darkMode(darkModeState))}>Dark Mode
      </button>
    </div>
  );
}

export default DarkMode;
