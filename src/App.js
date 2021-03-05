import Profile from "./components/Profile";
import React, { useContext } from "react";
import CompletedChallenges from "./components/CompletedChallenges";
import Countdown from "./components/Countdown";
import ChallengeBox from "./components/ChallengeBox";
import CountdownProvider from "./contexts/CountdownContext";
import ChallengesProvider from "./contexts/ChallengeContext";
import ExperienceBar from "./components/ExperienceBar";
import {
  Container,
  FeaturesContainer,
  RootContainer,
} from "./styles/components/Home.style";
import { ChallengesContext } from "./contexts/ChallengeContext";
import "./global.css";
import {
  Switch,
  SwitchContainer,
} from "./styles/components/ExperienceBar.style";
import DarkModeProvider, { DarkModeContext } from "./contexts/DarkModeContext";
import ToggleDarkMode from "./components/ToggleDarkMode";
import RootContainerForDarkMode from "./components/RootContainerForDarkMode";
import InputNewTimer from "./components/InputNewTimer";

function App() {
  return (
    <DarkModeProvider>
      <RootContainerForDarkMode>
        <ChallengesProvider>
          <Container>
            <CountdownProvider>
              <ExperienceBar />
              <FeaturesContainer>
                <ToggleDarkMode />

                <InputNewTimer />
              </FeaturesContainer>

              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </Container>
        </ChallengesProvider>
      </RootContainerForDarkMode>
    </DarkModeProvider>
  );
}

export default App;
