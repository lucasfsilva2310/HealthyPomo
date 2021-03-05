import { useContext, useEffect, useState } from "react";
import {
  CountdownButton,
  CountdownButtonActive,
  CountdownContainer,
} from "../styles/components/Countdown.style";

import { CountdownContext } from "../contexts/CountdownContext";
import { ChallengesContext } from "../contexts/ChallengeContext";

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  // padStart auxilia caso o minuto nao seja dois caracteres, se nao for, retorna '0'
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <CountdownContainer>
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
        <CountdownButton disabled>Ciclo Encerrado</CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButtonActive
              onClick={resetCountdown}
              type="button"
              className="countdownButtonActive"
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
