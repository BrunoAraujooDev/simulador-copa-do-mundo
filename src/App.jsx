import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { PlayoffProvider } from "./context/PlayoffContext"
import { Router } from "./Router"
import GlobalStyled from "./styles/globalStyled"
import { defaultTheme } from "./styles/theme/default"

function App() {

  return (
      <ThemeProvider theme={defaultTheme}>
        <PlayoffProvider>
          <BrowserRouter>
            <Router/>
            <GlobalStyled/>
          </BrowserRouter>
        </PlayoffProvider>
      </ThemeProvider>
  )
}

export default App
