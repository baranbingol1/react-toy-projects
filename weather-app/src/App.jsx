import { useState } from 'react';
import Form from './Form';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null)

  const getWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=<ENTER_YOUR_API_KEY>`
      )
      setWeather(response.data)
    } catch(error) {
      console.error('Error fetching weather:', error)
    }
  }

  return (
    <div className='container text-center mt-5'>
      <h1 className="mb-4">Weather App</h1>
      <Form getWeather={getWeather} />
      {weather && (
        <div className="mt-4">
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default App
