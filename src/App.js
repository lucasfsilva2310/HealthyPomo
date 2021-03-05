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

function App(props) {
  return (
    <ChallengesProvider>
      <Container>
        <ExperienceBar />
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
