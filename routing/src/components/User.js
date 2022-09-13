import React from 'react'
import { useState , useEffect } from 'react'
import { useParams, Link, Routes, Route } from 'react-router-dom'
import Users from './Users'

function User() {
    const { id } = useParams()

    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState({})
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(users => setUser(users))
      .finally(() => setLoading(false));
      } , [id]);
    
  return (
    <div>
        <h1>User Detail</h1>
        <h2>{loading && <div>loading</div>}</h2>
        id : {id} <br />
        name : {user.name} <br />
        website : {user.website} <br />
        <br />
        <br />

        <Link to={`/user/${parseInt(id) + 1}`}>Next to users {parseInt(id) +1 }</Link>
        <br />

        <Link to={`/user/${parseInt(id) - 1}`}>Previous to users {parseInt(id) -1 }</Link>

        

    </div>
  )
}

export default User