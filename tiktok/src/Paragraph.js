import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import './App.css'

function Paragraph() {
    const contect_object = useContext(ThemeContext)
    return (
        <p className={contect_object.theme}>
            Hello averyone from Paragraph！！！！！＜３
        </p>
    )
}

export default Paragraph