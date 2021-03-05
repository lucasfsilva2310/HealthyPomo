import { useContext } from "react";
import { ProfileContainer } from "../styles/components/Profile.style";

import { ChallengesContext } from "../contexts/ChallengeContext";

const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <ProfileContainer>
      <img src="https://github.com/lucasfsilva2310.png" alt="Lucas Silva" />
      <div>
        <strong>Lucas Silva</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
