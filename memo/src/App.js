import './App.css';
import Header from './components/Header';

import {useState, useMemo} from 'react';

function App() {

  const [number,setNumber] = useState(0);

  const data = useMemo(() => {
    return {name: "Memo", number}
  },[number])

  // burda header ancak dependency array olarak gönderdiğimiz number değiştiğinde render edilir.

  return (
    <div className="App">
      <Header  data={data} />
      <hr />

      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
}

export default App;
