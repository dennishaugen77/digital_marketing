// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react"

interface ThemeContextValue {
  themeMode: string
  switchTheme: (newTheme: string) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  themeMode: "light",
  switchTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<string>("light") // Default theme

  useEffect(() => {
    // Apply initial theme from localStorage or default
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setThemeMode(storedTheme)
      document.documentElement.className = storedTheme
    } else {
      document.documentElement.className = themeMode
    }
  }, [])

  const switchTheme = (newTheme: string) => {
    setThemeMode(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.className = newTheme // Apply class to root element
  }

  return (
    <ThemeContext.Provider value={{ themeMode, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
