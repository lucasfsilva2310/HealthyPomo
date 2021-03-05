import Profile from "./components/Profile";
import React from "react";
import CompletedChallenges from "./components/CompletedChallenges";
import Countdown from "./components/Countdown";
import ChallengeBox from "./components/ChallengeBox";
import CountdownProvider from "./contexts/CountdownContext";
import ChallengesProvider from "./contexts/ChallengeContext";
import ExperienceBar from "./components/ExperienceBar";
import { Container } from "./styles/components/Home.style";
import { ChallengesContext } from "./contexts/ChallengeContext";
import "./global.css";
import {
  Switch,
  SwitchContainer,
} from "./styles/components/ExperienceBar.style";

function App(props) {
  return (
    <ChallengesProvider>
      <Container>
        <ExperienceBar />
        <SwitchContainer>
          <strong>Dark Mode</strong>
          <Switch>
            <input type="checkbox" />
            <span class="slider round"></span>
          </Switch>
        </SwitchContainer>
        <CountdownProvider>
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
  );
}

export default App;
