import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import GlobalStyled from "./styles/globalStyled"



function App() {

  return (
      <BrowserRouter>
        <Router/>
        <GlobalStyled/>
      </BrowserRouter>
  )
}

export default App
