import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Button2() {
    const data = useContext(ThemeContext)

    const changeTheme = () => {
        data.setTheme(data.theme === 'dark' ? 'light' : 'dark')
    }
  return (
    <div>
        <button onClick={changeTheme}>Button 2</button>
        <p>Button2 active theme: {data.theme}</p>
    </div>
  )
}

export default Button2