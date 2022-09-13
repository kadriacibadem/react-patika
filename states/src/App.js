import {userState, useState} from "react";
import Counter from "./components/Counter";
import InputExample from "./components/InputExample";

import './App.css';

function App() {
  const [name,setName] = useState("Kadri")
  const [age,setAge] = useState(22)
  const [friends,setFriends] = useState(["Ahmet","Murat"]);
  const [address,setAdress] = useState({title:"Artvin",zip:8600})

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Acıbadem") }>Change Name</button>
      <button onClick={() => setAge(23)}>Change Age</button>

      <hr />
      <br></br>

      <h2>Friends</h2>
      {
        friends.map((friends,index) => (
          <div key={index}>{friends}</div>
        ))
      }

      <input id="input">

      </input>

      <button onClick={() => setFriends([...friends,document.querySelector("#input").value])}>Add Friends</button>


      <hr />
      <br></br>


      <h2>Adress</h2>
      <div>{address.title} {address.zip}</div>

      <hr />
      <br></br>


      <Counter />
      <hr />
      <br></br>
      <InputExample />

    </div>
  );
}




export default App;
