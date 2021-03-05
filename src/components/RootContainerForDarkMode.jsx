import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { RootContainer } from "../styles/components/Home.style";

const RootContainerForDarkMode = ({ children }) => {
  const { isDarkModeActivated } = useContext(DarkModeContext);

  return (
    <RootContainer darkMode={isDarkModeActivated}>{children}</RootContainer>
  );
};

export default RootContainerForDarkMode;
