import { useContext } from "react";
import { CompletedChallengesContainer } from "../styles/components/CompletedChallenges.style";

import { ChallengesContext } from "../contexts/ChallengeContext";
import { DarkModeContext } from "../contexts/DarkModeContext";

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <CompletedChallengesContainer>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </CompletedChallengesContainer>
  );
};

export default CompletedChallenges;
