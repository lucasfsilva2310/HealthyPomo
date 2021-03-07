import { useContext } from "react";
import { ProfileContainer } from "../styles/components/Profile.style";

import { ChallengesContext } from "../contexts/ChallengeContext";

const Profile = () => {
  const { level, userName, url } = useContext(ChallengesContext);

  return (
    <ProfileContainer>
      <img src={url} alt={userName} />
      <div>
        <strong>{userName}</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
