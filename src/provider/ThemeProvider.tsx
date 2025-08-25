// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react"

interface ThemeContextValue {
  themeMode: string
  switchTheme: (newTheme: string) => void,
  fontFamily: string,
  switchFont: (newFont: string) => void,
}

const ThemeContext = createContext<ThemeContextValue>({
  themeMode: "light",
  switchTheme: () => {},
  switchFont: () => {},
  fontFamily: "'Sans/Arial'",
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<string>("light")
  const [fontFamily, setFontFamily] = useState<string>("'Heebo/Montserrat'")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    const storedFont = localStorage.getItem('font')
    
    if (storedTheme) {
      setThemeMode(storedTheme)
      document.documentElement.className = storedTheme
    } else {
      document.documentElement.className = themeMode
    }

    if (storedFont) {
      setFontFamily(storedFont)
      document.documentElement.style.setProperty('--font-primary', storedFont.split('/')[0])
      document.documentElement.style.setProperty('--font-secondary', storedFont.split('/')[1])
    } else {
      document.documentElement.style.setProperty('--font-primary', fontFamily.split('/')[0])
      document.documentElement.style.setProperty('--font-secondary', fontFamily.split('/')[1])
    }

    }, [])

    
  const switchFont = (newFont: string) => {
    setFontFamily(newFont)
    localStorage.setItem("font", newFont)
    document.documentElement.style.setProperty('--font-primary', newFont.split('/')[0])
    document.documentElement.style.setProperty('--font-secondary', newFont.split('/')[1])
  }

  const switchTheme = (newTheme: string) => {
    setThemeMode(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.className = newTheme // Apply class to root element
  }

  return (
    <ThemeContext.Provider value={{ themeMode, switchTheme, fontFamily, switchFont }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
