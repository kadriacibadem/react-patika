import React, {useContext} from 'react'
import Button from './Button'
import Button2 from './Button2'
import themeContext from '../context/ThemeContext'
import User from './User'


function Container() {

    const data = useContext(themeContext)

  return (


    <div className={data.theme === 'dark' ? 'dark' : 'light' }>
      <Button />
      <hr />
      <Button2 />
      <hr />
      <User />
    </div>
  )

}

export default Container