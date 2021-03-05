import { useContext, useState } from "react";
import {
  ChallengeActive,
  ChallengeBoxContainer,
  ChallengeNotActive,
} from "../styles/components/ChallengeBox.style";

import { ChallengesContext } from "../contexts/ChallengeContext";
import { CountdownContext } from "../contexts/CountdownContext";
import { DarkModeContext } from "../contexts/DarkModeContext";

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { isDarkModeActivated } = useContext(DarkModeContext);

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <ChallengeBoxContainer darkMode={isDarkModeActivated}>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp </header>

          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt="Challenge active"
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className="challengeFailedButton"
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className="challengeSucceededButton"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  );
};

export default ChallengeBox;
