import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import {
  Switch,
  SwitchContainer,
} from "../styles/components/ExperienceBar.style";

const ToggleDarkMode = () => {
  const { isDarkModeActivated, setIsDarkModeActivaded } = useContext(
    DarkModeContext
  );
  function toggleMode() {
    setIsDarkModeActivaded(!isDarkModeActivated);
  }
  return (
    <SwitchContainer>
      <strong>Dark Mode</strong>
      <Switch>
        <input type="checkbox" onClick={toggleMode} />
        <span class="slider round"></span>
      </Switch>
    </SwitchContainer>
  );
};

export default ToggleDarkMode;
