import { CountdownButton } from "../styles/components/Countdown.style";
import Cookies from "js-cookie";
import { ClearCookiesContainer } from "../styles/components/ClearCookies.style";

const ClearCookies = () => {
  function clearAll() {
    Cookies.set("level", String(0));
    Cookies.set("currentExperience", String(0));
    Cookies.set("challengesCompleted", String(0));
    Cookies.set("pomoUser", String("Usuário"));
    Cookies.set(
      "pomoAvatar",
      String(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
      )
    );
    window.location.reload();
  }
  return (
    <>
      <ClearCookiesContainer>
        <CountdownButton
          onClick={clearAll}
          style={{ width: "11rem", background: "var(--red)" }}
        >
          Limpar Histórico
        </CountdownButton>
      </ClearCookiesContainer>
    </>
  );
};

export default ClearCookies;
