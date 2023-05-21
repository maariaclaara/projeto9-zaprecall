import { useState } from "react";
import Home from "./components/Home";
import Top from "./components/Top";
import Deck from "./components/Deck";
import Bottom from "./components/Bottom";


export default function App() {

  const [firstPage, setfirstPage] = useState(true);
  const [seeTop, setseeTop] = useState(false);
  const [seeDeck, setseeDeck] = useState(false);
  const [seeBottom, setseeBottom] = useState(false);
  const [count, setCount] = useState(0);

  const playGame = () => {
    setfirstPage(false);
    setseeTop(true);
    setseeDeck(true);
    setseeBottom(true);
  };
  
  return (
    <>
      {firstPage && <Home zapRecall = {playGame} />}
      {seeTop && <Top />}
      {seeDeck && <Deck counter={count} setCounter={setCount} />}
      {seeBottom && <Bottom counter={count} />}
    </>
  );
}
