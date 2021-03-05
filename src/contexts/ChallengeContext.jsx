import { createContext, useEffect, useState } from "react";
import challenges from "../challenges.json";

import Cookies from "js-cookie";

import LevelUpModal from "../components/LevelUpModal";
import AvatarModal from "../components/NewAvatarModal";

export const ChallengesContext = createContext({});

const ChallengesProvider = ({ children, ...rest }) => {
  // level
  const [level, setLevel] = useState(1);

  //experiencia atual
  const [currentExperience, setCurrentExperience] = useState(0);

  //desafios completos
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  const [valueName, setValueName] = useState("");

  const [valueAvatar, setValueAvatar] = useState("");

  const [userName, setUserName] = useState("Lucas"); //colocar cookies

  const [url, setUrl] = useState("https://github.com/lucasfsilva2310.png");

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    let savedLevel = Number(Cookies.get("level"));
    let savedExperience = Number(Cookies.get("currentExperience"));
    let savedChallenges = Number(Cookies.get("challengesCompleted"));
    let savedUserName = Number(Cookies.get("pomoUserName"));
    let savedAvatar = Number(Cookies.get("pomoAvatar"));
    setUserName(savedUserName ? savedUserName : "Usuário");
    setUrl(
      savedAvatar
        ? savedAvatar
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
    );
    setLevel(savedLevel ? savedLevel : 1);
    setCurrentExperience(savedExperience ? savedExperience : 0);
    setChallengesCompleted(savedChallenges ? savedChallenges : 0);
  }, []);

  // pedindo permisao para o usuario para emitir notificação
  useEffect(() => {
    Notification.requestPermission();
  }, []);

  //   //para salvar dados nos cookies
  //   //sempre que o level , a experiencia, ou a quantidade de desafios mudarem, esse useEffect vai rodar
  //   //a biblioteca que vai ser usada pra isso é a js-cookie
  //   //o typescript nao sabe as tipagens dessa lib, entao precisamos tambem instalar elas
  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo desafio! :) ", {
        body: `Valendo ${challenge.amount} xp. Boora!`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal,
        isAvatarModalOpen,
        setIsAvatarModalOpen,
        valueName,
        setValueName,
        valueAvatar,
        setValueAvatar,
        setUserName,
        setUrl,
        userName,
        url,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
      {isAvatarModalOpen && <AvatarModal />}
    </ChallengesContext.Provider>
  );
};

export default ChallengesProvider;
