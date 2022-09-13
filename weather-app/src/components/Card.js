import React from 'react'
import {useContext} from 'react'
import citiesContext from '../context/CitiesContext'

function Card() {

    const {weekfromday,forecast } = useContext(citiesContext)
    
    
  return (
    <div>
        <div className="container d-flex justify-content-center">
            <div className="weather">
                <div className="row">
                    {
                        forecast.forecastDay && forecast.forecastDay.map((day,num) => {
                            return <div className="col-3" key={num}>
                        <div className="card">
                            <span className="icon"><img className="img-fluid" src={day.day.condition.icon}/></span>
                            <div className="title"><p>{weekfromday[num]}</p></div>
                            <div className="temp">{day.day.maxtemp_c}<sup>&deg;</sup>
                            <div className='header'>{day.day.mintemp_c}<sup>&deg;</sup></div>
                            </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="header">General</div>
                                        <div className="value">{day.day.condition.text}</div>
                                    </div>              
                                </div>                            
                        </div>
                    </div>
                        })
                    }
                </div>
            </div>
                
        </div>
    </div>
  )
}

export default Card