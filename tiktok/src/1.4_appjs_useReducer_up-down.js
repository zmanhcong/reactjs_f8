import {useState,useReducer} from "react"

//useReducer là gì ,tại sao cần nó
/*
Về cơ bản useReducer làm đc gì thì uesState làm đươc đó và ngược lại.
Vậy khi nào dùng useReducer?
-> khi có quá nhiều State, làm mình phải setState quá nhiều lần. phức tạp. thì mình sẽ dùng useReducer
 */

// useState
// 1. Init state: 0
// 2. Action: Up(state + 1)/ Down( state - 1)

// useReducer
// 1. Init state: 0
// 2. Action: Up(state + 1)/ Down( state - 1)
// 3. Reducer
// 4. Dispath

// 1. Init state
const initState = 0

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//Reducer
const reducer = (state, action) => {
    switch(action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error( 'Invalid action') 
    }
}

function App() {
    const [count, dispatch] = useReducer(reducer, initState)


    return (
        <div style={{padding: '10px 32px'}}>
            <h1>{count}</h1>
            <button 
                // onClick={() => setCount(count + 1)}
                onClick={() => dispatch(UP_ACTION)}
            >Up</button>
            <button 
                // onClick={() => setCount(count - 1 )}
                onClick={() => dispatch(DOWN_ACTION )}
            >Down</button>
        </div>
    )
}


export default App