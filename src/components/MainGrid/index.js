import styled from "styled-components";

const MainGrid = styled.main`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  padding: 16px;
  grid-template-areas: "profileArea welcomeArea socialArea";
  grid-template-columns: 160px 1fr 312px;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
  }
`;

export default MainGrid;
