import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import GlobalStyled from "./styles/globalStyled"
import { defaultTheme } from "./styles/theme/default"

function App() {

  return (
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router/>
          <GlobalStyled/>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
