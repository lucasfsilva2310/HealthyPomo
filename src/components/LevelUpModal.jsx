import { useContext } from "react";
import { Container, Overlay } from "../styles/components/LevelUpModal.style";

import { ChallengesContext } from "../contexts/ChallengeContext";
import { DarkModeContext } from "../contexts/DarkModeContext";

export const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  const { isDarkModeActivated } = useContext(DarkModeContext);

  return (
    <Overlay>
      <Container darkMode={isDarkModeActivated}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>You´ve reached a new level!</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
