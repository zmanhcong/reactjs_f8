import { useState, createContent, createContext } from 'react';
import Content from './2_Content.js'
import './App.css'

export const ThemeContext = createContext();

console.log(ThemeContext)

function App() {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme( theme === 'dark' ? 'light' : 'dark')
    }

    return(
        <ThemeContext.Provider value={theme}>
            <div style={{padding: 20}}>
                <button onClick={toggleTheme}>Toggle</button>
                <Content/>
            </div>
        </ThemeContext.Provider>
    )
}

export default App