import { useContext } from "react";

import { CountdownContext } from "../contexts/CountdownContext";
import { DarkModeContext } from "../contexts/DarkModeContext";
import {
  Input,
  InputButton,
  InputContainer,
} from "../styles/components/InputNewTImer.style";

const InputNewTimer = () => {
  const { setTime, value, setValue } = useContext(CountdownContext);

  const { isDarkModeActivated } = useContext(DarkModeContext);

  function changeTimer(value) {
    setTime(value);
  }

  function handleInput(ev) {
    let newTime = ev.target.value * 60;
    setValue(newTime);
  }

  return (
    <InputContainer>
      <strong>Mudar Temporizador</strong>
      <Input
        onChange={handleInput}
        type="number"
        darkMode={isDarkModeActivated}
        placeholder="Em minutos"
      ></Input>
      <InputButton type="button" onClick={() => changeTimer(value)}>
        Atualizar
      </InputButton>
    </InputContainer>
  );
};

export default InputNewTimer;
