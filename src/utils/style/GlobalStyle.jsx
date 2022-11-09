import { createGlobalStyle } from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../context"


const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        
        background-color: ${({ isDarkMode }) => (isDarkMode ? '#121212' : 'white')};
        margin: 0;  
    }
`

export function GlobalStyle() {

    const {theme} = useContext(ThemeContext)
    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}