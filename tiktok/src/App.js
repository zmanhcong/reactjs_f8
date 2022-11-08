import {useState } from 'react'
import Content from './1_useEffect';

function App() {
    
    const [show, setShow] = useState(false)

  return (
    <div className="App" style={{padding: 20 , margin: 30 }}>
        <button
            onClick={() => setShow(!show)}
        >Mount</button>
        {show && <Content/>}
      
    </div>
  );
}


export default App;
