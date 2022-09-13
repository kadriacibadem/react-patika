import { useState , useEffect } from 'react';
import './App.css';
import User from './components/User';
import Users from './components/Users';
import Error from './components/Error';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink
} from "react-router-dom";

function App() {

  let activeClassName = "active";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => setUsers(users));
  } , []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink className={({ isActive }) =>
              isActive ? activeClassName : undefined
            } to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
              isActive ? activeClassName : undefined
            } to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
              isActive ? activeClassName : undefined
            } to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element= {<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/users/*" element={<Users users={users} />}>    
          </Route>

         {/*  URL Parameters */}

         {/* <Route path="/user/:id" element={<User />}>    
          </Route> */}




          {/* Error sayfaları için */}
          <Route path="*" element={<Error />} />
         
                    
        </Routes>
        
      </div>
    </Router>
  );
}

// burdaki fonksiyonları components dizini açıp orda tanımlayarak kullanabiliriz.
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}




export default App;
