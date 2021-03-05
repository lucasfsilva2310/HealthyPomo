import { useContext, useEffect, useState } from "react";
import {
  CountdownButton,
  CountdownButtonActive,
  CountdownContainer,
} from "../styles/components/Countdown.style";

import { CountdownContext } from "../contexts/CountdownContext";
import { ChallengesContext } from "../contexts/ChallengeContext";
import { DarkModeContext } from "../contexts/DarkModeContext";

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const { isDarkModeActivated } = useContext(DarkModeContext);

  // padStart auxilia caso o minuto nao seja dois caracteres, se nao for, retorna '0'
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <CountdownContainer darkMode={isDarkModeActivated}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>
      {hasFinished ? (
        <CountdownButton disabled darkMode={isDarkModeActivated}>
          Ciclo Encerrado
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButtonActive
              onClick={resetCountdown}
              type="button"
              darkMode={isDarkModeActivated}
            >
              Abandonar ciclo
            </CountdownButtonActive>
          ) : (
            <CountdownButton onClick={startCountdown} type="button">
              Iniciar um ciclo
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
