import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "./provider/ThemeProvider.js"
import { store } from "@/store"
import { Provider } from "react-redux"
import App from "./App.js"

import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
