import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {

  // 1️⃣ Global theme state stored using React useState
  const [themeMode, setThemeMode] = useState("light");

  // 2️⃣ Methods to update theme mode
  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  // 3️⃣ Whenever themeMode changes → update <html> class
  // This allows TailwindCSS dark mode to work
  useEffect(() => {
    const html = document.querySelector('html');

    html.classList.remove("light", "dark");
    html.classList.add(themeMode); // add selected theme
  }, [themeMode]);

  return (
    // 4️⃣ Wrapping entire app inside ThemeProvider
    // So all children can access theme context
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          
          {/* 5️⃣ Toggle Button Section */}
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          {/* 6️⃣ Card Component Section */}
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>

        </div>
      </div>

    </ThemeProvider>
  )
}

export default App;
