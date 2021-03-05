import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { Input } from "../styles/components/InputNewTImer.style";
import { Overlay } from "../styles/components/LevelUpModal.style";
import { AvatarContainer } from "../styles/components/NewAvatarModal.style";
import Cookies from "js-cookie";

export const AvatarModal = () => {
  const {
    setIsAvatarModalOpen,
    valueName,
    valueAvatar,
    setValueName,
    setValueAvatar,
    setUrl,
    setUserName,
    url,
    userName,
  } = useContext(ChallengesContext);

  const { isDarkModeActivated } = useContext(DarkModeContext);

  function closeModal() {
    setIsAvatarModalOpen(false);
  }

  function handleInputName(ev) {
    let newName = ev.target.value;
    setValueName(newName);
  }

  function handleInputAvatar(ev) {
    let newAvatar = ev.target.value;
    setValueAvatar(newAvatar);
  }

  function update() {
    if (valueAvatar.length > 0) {
      setUrl(valueAvatar);
      Cookies.set("pomoAvatar", String(url));
      return;
    }
    setUrl(url);

    if (valueName.length > 0) {
      setUserName(valueName);
      Cookies.set("pomoUserName", String(userName));
      return;
    }
    setUserName(userName);
  }
  return (
    <Overlay>
      <AvatarContainer darkMode={isDarkModeActivated}>
        <div>
          <strong>Mude seu Nome:</strong>
          <Input
            type="text"
            placeholder="Nome / Apelido"
            darkMode={isDarkModeActivated}
            onChange={handleInputName}
          ></Input>
        </div>
        <div>
          <strong>Mude seu Avatar</strong>
          <Input
            type="text"
            placeholder="URL da imagem"
            darkMode={isDarkModeActivated}
            onChange={handleInputAvatar}
          ></Input>
        </div>
        <a href="#" onClick={() => update()}>
          Atualizar
        </a>
        <button type="button" onClick={closeModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </AvatarContainer>
    </Overlay>
  );
};

export default AvatarModal;