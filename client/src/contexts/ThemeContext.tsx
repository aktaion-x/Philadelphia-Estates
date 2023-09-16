import { createContext, useReducer, useEffect } from "react";

type ThemeState = {
  theme: "LIGHT" | "DARK";
};
type SwitchAction = {
  type: "SWITCH";
};
type ThemeContextValue = {
  state: ThemeState;
  dispatch: React.Dispatch<SwitchAction>;
};
type ThemeContextProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

const themeReducer = (state: ThemeState, action: SwitchAction) => {
  switch (action.type) {
    case "SWITCH":
      localStorage.setItem("theme", state.theme === "LIGHT" ? "DARK" : "LIGHT");
      return state;
    default:
      return state;
  }
};

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [state, dispatch] = useReducer(themeReducer, {
    theme: "LIGHT"
  });

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      dispatch({ type: "SWITCH" });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
