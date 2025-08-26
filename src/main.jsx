import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "./provider/ThemeProvider.js"
import { store } from '@/store';
import App from "./App.tsx"

import "./index.css"
import { Provider } from "react-redux"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
    
  </StrictMode>,
)
