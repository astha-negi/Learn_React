// Creating ThemeContext + Custom Hook

import { createContext, useContext } from "react";

// 1️⃣ Create a Theme Context with default values
// These default values are used only when no Provider is present.
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

// 2️⃣ Export the Provider so App.jsx can wrap everything inside it
export const ThemeProvider = ThemeContext.Provider;

// 3️⃣ Custom hook to access ThemeContext easily
export default function useTheme() {
    return useContext(ThemeContext);
}
