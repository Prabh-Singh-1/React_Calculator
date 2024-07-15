import { useState } from "react";
import Button from "./components/button";
import './App.css';

function App() {
  const [clickedValues, setClickedValues] = useState("");

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
      setClickedValues(eval(clickedValues).toString());
    } catch {
      setClickedValues("Error");
    }
  }

  return (
    <div className="frame">
      <div className="display">
        {clickedValues}
      </div>
      <div className="buttons">
        <Button value={"C"} className='gray' onclick={clear} />
        <Button value={"←"} className='gray' onclick={back} />
        <Button value={"%"} className='gray' onclick={handleButton} />
        <Button value={"/"} className="opera" onclick={handleButton} />
        <Button value={7} className="nums" onclick={handleButton} />
        <Button value={8} className="nums" onclick={handleButton} />
        <Button value={9} className="nums" onclick={handleButton} />
        <Button value={"*"} className="opera" onclick={handleButton} />
        <Button value={4} className="nums" onclick={handleButton} />
        <Button value={5} className="nums" onclick={handleButton} />
        <Button value={6} className="nums" onclick={handleButton} />
        <Button value="-" className="opera" onclick={handleButton} />
        <Button value={1} className="nums" onclick={handleButton} />
        <Button value={2} className="nums" onclick={handleButton} />
        <Button value={3} className="nums" onclick={handleButton} />
        <Button value={"+"} className="opera" onclick={handleButton} />
        <Button value={"00"} className="nums" onclick={handleButton} />
        <Button value={0} className="nums" onclick={handleButton} />
        <Button value={"."} className="nums" onclick={handleButton} />
        <Button value={"="} className="opera" onclick={calculate} />
      </div>
    </div>
  );
}

export default App;
