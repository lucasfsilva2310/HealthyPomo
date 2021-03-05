import { createContext, useState } from "react";

export const DarkModeContext = createContext({});

const DarkModeProvider = ({ children }) => {
  const [isDarkModeActivated, setIsDarkModeActivaded] = useState(false);

  return (
    <DarkModeContext.Provider
      value={{
        isDarkModeActivated,
        setIsDarkModeActivaded,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
