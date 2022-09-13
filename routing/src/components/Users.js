import React from "react";
import { Link, Routes, Route, useParams, NavLink } from "react-router-dom";
import User from "./User";
function Users({ users }) {
  let activeClassName = "actives";
  return (
    
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
            
              <NavLink className={({ isActive }) =>
              isActive ? activeClassName : undefined
            } to={`/users/user/${user.id}`}>{user.name}</NavLink>
            
            </li>
            
          );
        })}
      </ul>

      <Routes>
        <Route path="user/:id" element={<User />}/>
      </Routes>

      
    </div>
  );
}

export default Users;
