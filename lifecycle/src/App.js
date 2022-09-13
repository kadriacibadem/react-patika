import Counter from "./components/Counter";
import {useState} from "react";
function App() {

  const [isVisible, setisVisible] = useState(true);
  
  return (
    <div className="App">
    {isVisible && <Counter />}


    <button onClick={() => setisVisible(!isVisible)}>Toggle</button>
    
    
      
    </div>
  );
}

export default App;
