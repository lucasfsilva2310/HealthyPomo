import { useContext } from "react";
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
          <header>Gain {activeChallenge.amount} xp </header>

          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt="Challenge active"
            />
            <strong>New Challenge!</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className="challengeFailedButton"
              onClick={handleChallengeFailed}
            >
              Failed
            </button>
            <button
              type="button"
              className="challengeSucceededButton"
              onClick={handleChallengeSucceeded}
            >
              Completed
            </button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finish a cycle to receive a new challenge</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Level up by completing challenges
          </p>
        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  );
};

export default ChallengeBox;
