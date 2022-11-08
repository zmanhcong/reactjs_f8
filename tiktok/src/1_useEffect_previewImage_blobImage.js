/*
1. Chức năng preview ảnh, show ảnh mà không cần lưu vào database
2. Sau khi tạo image tạm, mình cần clean ảnh đó đi khi được chèn ảnh khác vào. -> tăng performance

*/

import {useEffect, useState} from 'react'


function Content() {

    const [avatar, setAvater] = useState()

    useEffect( () => {
        //CleanUP : nếu không clean thì link ảnh trước vẫn còn, -> dẫn đến memory leak. rò rỉ bộ nhớ
        return () => {
            avatar && URL.revokeObjectURL( avatar.preview)
        }
    },[avatar])
    

    const handlePreviewAvartar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        // console.log(URL.createObjectURL(file));
        setAvater(file)
    }
       
    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvartar}
            />
                {avatar && (
                    <img src={avatar.preview} alt="" width="80%"/>
                )}
            
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