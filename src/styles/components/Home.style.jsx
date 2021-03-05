/* vh faz o container ocupar 100 da altura da tela , nao importa o tamanho da tela */
import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }
`;

export const RootContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.darkMode === true ? "var(--darkRoot)" : "var(--white)"};
  transition: background 0.5s;
  color: var(--text);
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`;
