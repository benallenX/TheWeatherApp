import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null)
    const [city, setCity] = useState('Atlanta') //default city is atlanta
    useEffect(() => {
        const fetchWeatherData = async () => {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0d96481ddc7edc31c6fe7e373fc9b6f&units=imperial`  
            )
            const data = response.data
            setWeatherData(data)
        }
        fetchWeatherData()
    }, [city])

    const handleInputChange = (e) => {
        setCity(e.target.value)
        e.PreventDefault()
    }
  return (
    <div className='bg-gray-50 min-h-screen flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold mb-8 text-blue-500'>The weather app</h1>
          <div className=' max-w-md w-full rounded-lg shadow-lg p-3'>
          
          <input type='text'
              value={city}
              onChange={handleInputChange}
              placeholder='Enter A city Name'
              className='w-full p-2 rounded-md border-2-gray-100 mb-4'
            />
          {weatherData && (
              <div>
                  <h2>{weatherData.name}</h2>
                  <p className='text-red-500'>{weatherData.main.temp}&#8457;</p>
                  <p>{ weatherData.weather[0].description}</p>
              </div>
              )}
              </div> 
            </div>
  )
}

export default Weather
