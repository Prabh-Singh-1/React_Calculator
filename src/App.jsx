import { useState, useEffect, useRef } from "react";
import Button from "./components/button";
import './App.css';

function App() {
  const [clickedValues, setClickedValues] = useState("");
  const [history, setHistory] = useState([]);
  const [nextId, setNextId] = useState(0);
  const historyRef = useRef(null);

  const handleButton = (value) => {
    setClickedValues(prev => prev + value);
  };

  const clear = () => {
    setClickedValues("");
  }

  const back = () => {
    setClickedValues(prev => prev.slice(0, -1));
  }

  const calculate = () => {
    try {
      const calcValue = eval(clickedValues).toString();
      setHistory(prevHistory => [
        ...prevHistory,
        { id: nextId, value: clickedValues }
      ]);
      setNextId(prevId => prevId + 1);
      setClickedValues(calcValue );
    } catch {
      setClickedValues("Error");
    }
  }

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="frame">
      <div className="historyContainer flex justify-end ">
        <div className="historyDisplay flex flex-col overflow-y-auto" ref={historyRef}>
          <ul>
            {history.map(val => (
              <li key={val.id}>{val.value}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="display">
        {clickedValues}
      </div>
      <div className="buttons">
        <Button value={"C"} className='gray' onclick={clear} />
        <Button value={"←"} className='gray' onclick={back} />
        <Button value={"%"} className='gray' onclick={() => handleButton("%")} />
        <Button value={"/"} className="opera" onclick={() => handleButton("/")} />
        <Button value={7} className="nums" onclick={() => handleButton("7")} />
        <Button value={8} className="nums" onclick={() => handleButton("8")} />
        <Button value={9} className="nums" onclick={() => handleButton("9")} />
        <Button value={"*"} className="opera" onclick={() => handleButton("*")} />
        <Button value={4} className="nums" onclick={() => handleButton("4")} />
        <Button value={5} className="nums" onclick={() => handleButton("5")} />
        <Button value={6} className="nums" onclick={() => handleButton("6")} />
        <Button value="-" className="opera" onclick={() => handleButton("-")} />
        <Button value={1} className="nums" onclick={() => handleButton("1")} />
        <Button value={2} className="nums" onclick={() => handleButton("2")} />
        <Button value={3} className="nums" onclick={() => handleButton("3")} />
        <Button value={"+"} className="opera" onclick={() => handleButton("+")} />
        <Button value={"00"} className="nums" onclick={() => handleButton("00")} />
        <Button value={0} className="nums" onclick={() => handleButton("0")} />
        <Button value={"."} className="nums" onclick={() => handleButton(".")} />
        <Button value={"="} className="opera" onclick={calculate} />
      </div>
    </div>
  );
}

export default App;
