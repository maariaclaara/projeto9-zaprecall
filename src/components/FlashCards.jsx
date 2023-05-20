import { useState } from "react";
import styled from "styled-components";

export default function FlashCards() {
  const [mostrando, setMostrando] = useState("inicial");
  //tela inicial
  //tela intermediaria
  //tela final

  console.log({ mostrando });
  function handleClick() {
    setMostrando("intermediario");
  }

  function cardFinal() {
    setMostrando("final");
  }

  return (
    <AppContainer>
      <Card>
        {mostrando === "inicial" && (
          <div>
            inicial
            <button onClick={handleClick}>Mostrar Detalhes</button>
          </div>
        )}

        {mostrando === "intermediario" && (
          <div>
            intermediario
            <button onClick={cardFinal}>Mostrar Detalhes</button>
          </div>
        )}

        {mostrando === "final" && <div>estado final</div>}
      </Card>
    </AppContainer>
  );
}

const Card = styled.div`
  margin: auto;
  font-size: 26px;
  width: 500px;
  background-color: #fff;
  padding: 10px;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;



