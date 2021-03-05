import { useContext } from "react";
import { Container, Overlay } from "../styles/components/LevelUpModal.style";

import { ChallengesContext } from "../contexts/ChallengeContext";

export const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level!</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
