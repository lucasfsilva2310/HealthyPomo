import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import { CountdownButton } from "../styles/components/Countdown.style";

const OpenAvatarModal = () => {
  const { setIsAvatarModalOpen } = useContext(ChallengesContext);

  function openModal() {
    setIsAvatarModalOpen(true);
  }

  return (
    <>
      <CountdownButton
        style={{ width: "10rem" }}
        type="button"
        onClick={openModal}
      >
        Change Avatar
      </CountdownButton>
    </>
  );
};

export default OpenAvatarModal;
