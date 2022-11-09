import {useState, memo, useCallback} from "react"
import Content from "./2_Content"

//useCallback() : tránh re-render có memo. khi được gọi nó sẽ tạo ra 1 vùng nhớ bên ngoài, sau đó nó gán cho hadleIncrease, và nó tăng number mỗi khi click button. không bị re-render lại.
//dùng callBack() chỉ khi ở function child có memo, nhưng không tối ưu được re-call thì mới sử dụng useCallback để tối ưu, chứ callBack không đi 1 mình


function App() {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount ( prevCount => prevCount + 1)
    }, [])

    return (
        <div style={{padding: '10px 32px'}}>
            <Content 
                onhandleIncrease = {handleIncrease}
            />
            <h1>{count}</h1>
        </div>
    )
}

/* 
---------------------------Content.js--------------------------------------------------
*/
// import {memo} from 'react'
function Content1({onhandleIncrease}) {

    console.log("Re-render");
    return (
        <>
            <h1>Hello</h1>
            <button onClick={onhandleIncrease}>Increes</button>
        </>
    )
}

// export default memo(Content)


export default App