import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Button() {
    const data = useContext(ThemeContext)
    
    const changeTheme = () => {
        data.setTheme(data.theme === 'dark' ? 'light' : 'dark')
    }

    

  return (
    <div>
    <button onClick={changeTheme}>Button</button>
    <p>Active Theme: {data.theme}</p>
    </div>
  )
}

export default Button