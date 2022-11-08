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
*/

// --------------- NOTE -----------------
/*
1.Callback luôn được gọi sau khi component mounted

*/
import {useEffect, useState} from 'react'

const tabs = ['posts', 'comments', 'albums']


function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=> res.json())
            .then(posts => {
                setPosts(posts)
                //console.log(posts)
            })
    }, [])   

    return (
        <div>
            {tabs.map(tab => (
                <button key={tab}>
                    {tab}
                </button>
            ))}

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            ></input>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
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