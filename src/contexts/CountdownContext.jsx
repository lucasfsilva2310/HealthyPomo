import { createContext, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengeContext";

export const CountdownContext = createContext({});

const CountdownProvider = ({ children }) => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const [value, setValue] = useState(time);

  const timer = {
    time: value,
    currentTime: 0,
    interval: null,
    init() {
      timer.currentTime = timer.time;
      timer.interval = setInterval(timer.countdown, 1000);
    },

    countdown() {
      timer.currentTime = timer.currentTime - 1;
      setTime(time - 1);

      if (timer.currentTime === 0) {
        clearInterval(timer.interval);
      }
    },
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    //prestar atenção nessa linha Tentar arrumar set timeout AQUI
    clearTimeout();
    setIsActive(false);
    setHasFinished(false);
    setTimeout(() => setTime(value), 1000); // e AQUI, para ser instantaneo, nao demorar 1s
  }

  useEffect(() => {
    if (isActive && time > 0) {
      //essa variavel countdownTimeout só serve pra CANCELAR um timeout que ja tenha sido iniciado
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
        time,
        setTime,
        value,
        setValue,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};

export default CountdownProvider;
