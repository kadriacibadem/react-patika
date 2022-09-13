import {createContext, useCallback, useEffect} from 'react';
import { useState } from 'react';


const citiesContext = createContext();

export const CitiesProvider = ({children}) => {

    const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const weekfromday = []
    const daynow = new Date().getDay();
    
    const setWeek = () => {
        for(var i = 0; i < 7; i++){
            weekfromday.push(weeks[(daynow + i) % 7]+' ')	
        }
    }
    setWeek()


    const [forecast, setForecast] = useState([{
        forecastDay: '',
    }]);


    

    const [city,setCity] = useState('Adana');

    

    const[day,setDay] = useState([{
        day: "",
        weather_icon: "",
        temp_c: "",
        temp_f: "",
    }]);


    const getWeather = () => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=061d4b5b9dbd49bea1e140646221309&q=${city}&days=7`)
        .then((response) => response.json())
        .then((data) => {
            setForecast({
                forecastDay: data.forecast.forecastday
            })
        })
        
    }

   
    useEffect(() => {
        getWeather();
    } ,[city]);

    const values = {
        day,
        setDay,
        getWeather,
        city,
        setCity,
        weekfromday,
        forecast,
    }

    return <citiesContext.Provider value={values}>{children}</citiesContext.Provider>
}


export default citiesContext;