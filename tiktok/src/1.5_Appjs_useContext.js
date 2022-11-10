import Content from './2_Content.js'

import { useContext } from 'react'
import {ThemeContext} from './ThemeContext'

//để tạo context thì cần
// 1. Tạo Provider
// 2. Tạo sub
// 3. Tạo pub


function App() {
    const context = useContext(ThemeContext)

    return(
            <div style={{padding: 20}}>
                <button onClick={context.toggleTheme}>Toggle</button>
                <Content/>
            </div>
        
    )
}

export default App