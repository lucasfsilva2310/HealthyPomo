import { useContext } from "react";
import {
  ExperienceBarContainer,
  CurrentExperience,
} from "../styles/components/ExperienceBar.style";

import { ChallengesContext } from "../contexts/ChallengeContext";

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  // ${percentToNextLevel}
  // ${percentToNextLevel}
  // {currentExperience}
  // {experienceToNextLevel}
  return (
    <ExperienceBarContainer>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </ExperienceBarContainer>
  );
};

export default ExperienceBar;
