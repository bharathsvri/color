import './App.css';
import Content from "./Content"
import {useState} from "react";

function App() {

  const [color, setColor] = useState("empty value");

  const [toggle, setToggle] = useState("black");
  
  const [hash,setHash] = useState('')

  return (
    <div className="App">
        <Content 
          color={color}
          setColor={setColor}
          toggle={toggle}
          setToggle={setToggle}
          hash={hash}
          setHash={setHash}
        />
    </div>
  );
}

export default App;
