import {memo} from 'react'

function Content() {

    console.log("Re-render");
    return (
        <h1>Hello</h1>
    )
}

export default memo(Content)   //Thêm memo vào thì function con này sẽ không bị re-render lại mỗi khi function cha bị render.
// cơ chế của memo là: nếu không có props của được sử dụng ở con, thì th con sẽ không bị re-call


//----------------------------------------------------------------------
//              FUNCTION   
//----------------------------------------------------------------------
/*
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
            <Content />
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increes</button>
        </div>
    )
}

export default App
*/