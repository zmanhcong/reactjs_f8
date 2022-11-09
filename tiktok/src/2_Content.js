import {memo} from 'react'

function Content(onhandleIncrease) {

    console.log("Re-render");
    return (
        <>
            <h1>Hello</h1>
            <button onClick={onhandleIncrease}>Increes</button>
        </>
    )
}

export default memo(Content)