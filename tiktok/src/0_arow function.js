import {useState, memo, useCallback} from "react"
import Content from "./2_Content"


function App() {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount ( prevCount => prevCount + 1)        //arow function
    }, [])

    return (
        <div>
            <button
                onClick={handleIncrease}
            ></button>
        </div>
    )
}

export default App