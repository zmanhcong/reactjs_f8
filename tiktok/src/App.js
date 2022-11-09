import {useState, memo} from "react"
import Content from "./2_Content"

//1.memo() -> Higher Order Component (HOC)
//2.useCallback() : học memo() trước để lấy nên tảng học useCallback()

function App() {
    const [count, setCount] = useState(0)

    const handleIncrease = () => {
        setCount ( count + 1)
    }

    return (
        <div style={{padding: '10px 32px'}}>
            <Content handleIncrease = {onhandleIncrease}/>
            <h1>{count}</h1>
        </div>
    )
}

export default App