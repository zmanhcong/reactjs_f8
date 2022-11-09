import {useState,useMemo, useRef} from "react"
import Content from "./2_Content"

//useMemo: tránh thực hiện 1 function thừa, không cần thiết.
//memo: tránh re-render 1 component thừa, không cần thiết.

function App() {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [product, setProduct] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
        setProduct([...product, {
            name,
            price: +price //convert string to number
        }])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }

    const total = useMemo( () => {
        const result = product.reduce((result, prod) => {
            console.log('Test tinh toan lai');  //mỗi khi input vào input, thì hàm này lại được gọi => cần thêm useMemo
            return result + prod.price
        }, 0)
        return result
    }, [product])  // [] call one time only

    return (
        <div style={{padding: '10px 32px'}}>
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter name ..."
                onChange={(e) => setName(e.target.value)}
            ></input>
            <br/>
            <input
                value={price}
                placeholder="Enter price ..."
                onChange={(e) => setPrice(e.target.value)}
            ></input>
            <br/>
            <button
                onClick={handleSubmit}
            >Add</button>
            <br/>
            Total : {total}
            <ul>
                {product.map((pr,index) => (
                        <li key={index}>
                            {pr.name} - {pr.price}
                        </li>
                ))}
            </ul>
        </div>
    )
}


export default App