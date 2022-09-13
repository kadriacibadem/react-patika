import React from 'react'
import {useContext,useState} from 'react'
import UserContext from '../context/UserContext'

function User() {

    const {user,setUser} = useContext(UserContext)

    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({id:1,name:'Kadri Doe',bio:'bi o yok'})
            setLoading(false)
        }, 1000);
    }

  return (
    <div>{
        !user && <button onClick={() => {handleLogin()}}>{loading ? 'loading...' : 'Login'}</button>
    }
        
        <br />
        <code>{JSON.stringify(user)}</code>
        <br />

    {
        user && <button onClick={() => {setUser(null)}}>Logout</button>
    }
        
    </div>
  )
}

export default User