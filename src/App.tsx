import { BrowserRouter } from "react-router-dom"
import "./App.css"
import { Routing } from "./routing"

export const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  )
}

export default App
