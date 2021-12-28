import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {darkMode, fontColor as fontColorAction} from "../features/theme";


function DarkMode() {
    const dispatch = useDispatch();
    const fontColor = useSelector(s => s.theme.fontColor);
    const [darkModeState, setDarkModeState] = useState(false);


    function onChangeThemeClicked() {
        setDarkModeState(!darkModeState);
        return dispatch(darkMode(!darkModeState));
    }

    function onFontColorChange(e) {
        dispatch(fontColorAction(e.target.value));
    }

    return (
        <div>
            <button onClick={() => onChangeThemeClicked()}>
                Toggle Dark Mode
            </button>
            <br/>
            <label htmlFor={"fontColor"}>Font Color: </label>
            <input id={"fontColor"} placeholder={"Enter Color"} value={fontColor} onChange={onFontColorChange}/>
        </div>
    );
}

export default DarkMode;
