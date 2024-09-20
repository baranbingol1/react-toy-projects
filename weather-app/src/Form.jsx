/* eslint-disable react/prop-types */
import {useState} from 'react'

const Form = ({ getWeather }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (city) {
            getWeather(city)
        }
        setCity('')
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
            <input 
              type="text"
              value={city}
              placeholder="Enter city"
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="Submit" className="btn btn-primary">Get Weather</button>
        </form>
    )
}

export default Form