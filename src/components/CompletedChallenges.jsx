import { useContext } from "react";
import { CompletedChallengesContainer } from "../styles/components/CompletedChallenges.style";

import { ChallengesContext } from "../contexts/ChallengeContext";

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <CompletedChallengesContainer>
      <span>Challenges completed</span>
      <span>{challengesCompleted}</span>
    </CompletedChallengesContainer>
  );
};

export default CompletedChallenges;
