// Kiến thức cần cho bài học
//      1.Event: add/ remove event listener
//      2.Observer patter: Subcribe/ unsubcribe
//      3.Closure
//      4.Timer: setInterval, setTimeout, clearInterval, clearTimeout
//      5.useState
//      6.Mounted/ unmounted
//      7.Call API

/*Bài học về:  useEffect là gì? ta dùng useEffect có thể làm được 4 việc dưới đây.
1.Update DOM
    - F8 blog title
2.Call API
3.List DOM events
    -Scroll
    -Resize
4.Cleanup
    - Remove listenner / Usubcribe
    - Clear timer

*/

/* 
Effect có 3 trường hợp dưới đây
    1. useEffect(callback)
    2. useEffect(callback, [])  ==> cái này hay được dùng cho call API, vì nó chỉ được gọi 1 lần mỗi khi component mounted ( vì nếu gọi nhiều lần thì performance không tốt)
    3. useEffect(callback,[deps]) => Có dependence thì callback sẽ được gọi lại mỗi khi deps thay đổi
    ---
    Khi clean dữ liệu thì clean sẽ được chạy trước khi re-render lần 2. ví dụ mình có sử dụng deps, và deps change thì re-render, thì lần re-render đó sẽ thực hiện clean trước khi chạy logic
*/

// --------------- NOTE -----------------
/*
1.Callback luôn được gọi sau khi component mounted

*/
import {useEffect, useState} from 'react'


function Content() {

    const [countdow, setCountdown] = useState(180)

    useEffect( ()  => {
        const timerId = setTimeout( () => {
            setCountdown(countdow - 1)
            console.log(countdow);
        }, 1000)

        //Cleanup func. khi mà un-mount thì remove function.
        return () => clearTimeout(timerId)

    }, [countdow])   // mỗi lần countdow change thì cục useEffect sẽ re-render 1 lần nữa. nên là countdown được.

       
    return (
        <div>
            <h1>{countdow}</h1>
        </div>
    )
}

export default Content  //cái này được mount ở App.js



//App.js có nội dung như sau
/*
import {useState } from 'react'
import Content from './1_useEffect';

function App() {
    
    const [show, setShow] = useState(false)

  return (
    <div className="App" style={{padding: 20 , margin: 30 }}>
        <button
            onClick={() => setShow(!show)}
        >Toglle</button>
        {show && <Content/>}
      
    </div>
  );
}


export default App;

*/