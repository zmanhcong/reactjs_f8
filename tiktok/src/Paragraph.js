import { useContext } from "react";
import { ThemeContext } from "./App";

function Paragraph() {
    const theme = useContext(ThemeContext)
    console.log(theme);
    return (
        <p className={theme}>
            Hello averyone from Paragraph！！！！！＜３
        </p>
    )
}


export default Paragraph