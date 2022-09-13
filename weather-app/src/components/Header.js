import React from 'react'
import {useContext} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import citiesContext from '../context/CitiesContext'
import citiesJSON from '../data/cities.json'

function Header() {

    const {city,setCity} = useContext(citiesContext)


    const handleSelect = (eventKey) => {
        eventKey.preventDefault()
        setCity(eventKey.target.textContent)
    }

  return (
    <div className='d-flex justify-content-center'>
      <DropdownButton id='dropdown-menu'  title={city}>
        {citiesJSON.map((city) => {
            return <Dropdown.Item key={city['Sehir-Bilgileri'].plaka} onClick={handleSelect}>{
              city['Sehir-Bilgileri'].sehir
            }</Dropdown.Item>
        })}
    </DropdownButton>

  

    </div>
  )
}

export default Header