import React from "react";
/*Guide for dark mode with context
https://www.carlrippon.com/implementing-dark-mode-in-a-react-app-with-css-properties/?fbclid=IwAR3_t4X7XPKqFqjzdjMogefU3GFyFL7HiczJQcUBEuM6I4vMWmEsceTLzss*/

const themeColours = {
  light: {
    color: "#343434",
    backgroundColor: "rgb(224, 198, 140)",
  },
  dark: {
    color: "#343434",
    backgroundColor: "#3f3f3f",
  },
};

type ThemeName = "light" | "dark";
type ThemeContextType = {
  theme: ThemeName;
  setTheme: (name: ThemeName) => void;
};

const ThemeContext = React.createContext<ThemeContextType>(undefined!);

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [themeName, setThemeName] = React.useState<ThemeName>("light");

  const setTheme = (name: ThemeName) => {
    document.body.style.setProperty("--color", themeColours[name].color);
    document.body.style.setProperty(
      "--background-color",
      themeColours[name].backgroundColor
    );
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
