import { useState } from "react";
import styled from "styled-components";
import arrowPlay from "../assets/arrowPlay.png";
import arrowTurn from "../assets/arrowTurn.png";
import iconError from "../assets/iconError.png";
import iconAlmost from "../assets/iconAlmost.png";
import iconRight from "../assets/iconRight.png";

export default function FlashCards({ i, question, answer, counter, setCounter }) {
  const [openLetter, setopenLetter] = useState(true);
  const [openQuestion, setopenQuestion] = useState(false);
  const [openResponse, setopenResponse] = useState(false);
  const [openFinish, setopenFinish] = useState(false);
  const [iconPlay, seticonPlay] = useState(arrowPlay);
  const [color, setColor] = useState("");
  const [dataTest, setDataTest] = useState("");

  function seeQuestion() {
    setopenQuestion(true);
    setopenLetter(false);
  }

  function seeResponse() {
    setopenQuestion(false);
    setopenResponse(true);
  }

  function playerResponse(color) {
    setopenResponse(false);
    setopenFinish(true);

    if (color === "redAnswer") {
      seticonPlay(iconError);
      setColor("#FF3030");
      setCounter(counter + 1);
      setDataTest("no-icon");
    } else if (color === "orangeAnswer") {
      seticonPlay(iconAlmost);
      setColor("#FF922E");
      setCounter(counter + 1);
      setDataTest("partial-icon");
    } else if (color === "greenAnswer") {
      seticonPlay(iconRight);
      setColor("#2FBE34");
      setCounter(counter + 1);
      setDataTest("zap-icon");
    }
  }

  return (
    <>
      {openLetter && (
        <ClosedLetter>
          <div data-test="flashcard">
          <h2 data-test="flashcard-text">PERGUNTA {i}</h2>
          <img
            data-test="play-btn"
            src={arrowPlay}
            alt={arrowPlay}
            onClick={() => seeQuestion()}
          ></img>
          </div>
        </ClosedLetter>
      )}

      {openQuestion && (
        <SeeQuestion>
          <div data-test="flashcard">
          <h2 data-test="flashcard-text">{question}</h2>
          <img
            data-test="turn-btn"
            src={arrowTurn}
            alt={arrowTurn}
            onClick={() => seeResponse()}
          />
          </div>
        </SeeQuestion>
      )}

      {openResponse && (
        <SeeResponse>
          <div data-test="flashcard">
          <h2 data-test="flashcard-text">{answer}</h2>
          <DivButtons>
            <Button
              data-test="no-btn"
              color="#FF3030"
              onClick={() => playerResponse("redAnswer")}
            >
              Não lembrei
            </Button>
            <Button
              data-test="partial-btn"
              color="#FF922E"
              onClick={() => playerResponse("orangeAnswer")}
            >
              Quase não lembrei
            </Button>
            <Button
              data-test="zap-btn"
              color="#2FBE34"
              onClick={() => playerResponse("greenAnswer")}
            >
              Zap!
            </Button>
          </DivButtons>
          </div>
        </SeeResponse>
      )}

      {openFinish && (
        <FinishedAnswer color={color}>
          <div data-test="flashcard">
          <h2 data-test="flashcard-text">PERGUNTA {i}</h2>
          <img data-test={dataTest} src={iconPlay} alt={iconPlay} />
          </div>
        </FinishedAnswer>
      )}
    </>
  );
}

const ClosedLetter = styled.div`
  width: 80%;
  height: 65px;
  background-color: #ffffff;
  margin: auto;
  margin-bottom: 25px;
  padding: 23px 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    background-color: #ffffff;
    margin-left: 10px;
    font-family: "Recursive", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    margin-right: 20px;
  }
  img {
    color: #333333;
    margin-right: 19px;
    height: 23px;
    width: 20px;
    cursor: pointer;
  }
`;

const SeeQuestion = styled.div`
  position: relative;
  width: 80%;
  min-height: 131px;
  background-color: #FFFFD5;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h2 {
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }

  img {
    color: #333333;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 30px;
    height: 20px;
    cursor: pointer;
  }
`;

const SeeResponse = styled.div`
  position: relative;
  width: 80%;
  min-height: 131px;
  background-color: #ffffd5;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  backface-visibility: hidden;
  h2 {
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 22px;
  }
`;

const DivButtons = styled.div`
  background-color: #ffffd5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Button = styled.button`
  width: 85px;
  height: 40px;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  border-radius: 5px;
  padding: 10px;
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
`;

const FinishedAnswer = styled.div`
  width: 80%;
  height: 65px;
  background-color: #ffffff;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    background-color: #ffffff;
    margin-left: 10px;
    font-family: "Recursive", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.color};
    cursor: default;
  }
  img {
    color: #333333;
    margin-right: 19px;
    height: 23px;
    width: 20px;
    cursor: pointer;
  }
`;





