import styles from './Weather.module.css'
import { useState, useEffect } from 'react'
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog, WiDayHaze, WiNightClear, WiNightCloudy, WiNightRain } from 'react-icons/wi'

function getWeatherIcon(condition: string, size: number = 64) {
  switch (condition) {
    case 'Clear': return <WiDaySunny size={size} />
    case 'Clouds': return <WiCloudy size={size} />
    case 'Rain': return <WiRain size={size} />
    case 'Drizzle': return <WiRain size={size} />
    case 'Snow': return <WiSnow size={size} />
    case 'Thunderstorm': return <WiThunderstorm size={size} />
    case 'Fog': return <WiFog size={size} />
    case 'Mist': return <WiFog size={size} />
    case 'Haze': return <WiDayHaze size={size} />
    default: return <WiDaySunny size={size} />
  }
}

interface WeatherData {
  name: string
  main: {
    temp: number
    feels_like: number
    humidity: number
  }
  weather: {
    main: string
    description: string
    icon: string
  }[]
}

function getWeather(): Promise<string> {
  const key = import.meta.env.VITE_WEATHER_API_KEY
  const units = navigator.language === 'en-US' ? 'imperial' : 'metric'

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      const query = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`
      resolve(query)
    })
  })
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getWeather()
      .then(url => fetch(url))
      .then(res => res.json())
      .then(data => {
        setWeather(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Could not get weather')
        setLoading(false)
      })
  }, [])

  if (loading) return <div className={styles.Weatherw}>Loading...</div>
  if (error) return <div className={styles.Weatherw}>{error}</div>
  if (!weather) return null

  //const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

  return (
    <div className={styles.Weatherw}>
      <div className={styles.elementsj}>
        <h3>{weather.name}</h3>
        {getWeatherIcon(weather.weather[0].main)}
        <h4>{Math.round(weather.main.temp)}°C</h4>
        <p className='description'>{weather.weather[0].description}</p>
        <p>Feels like {Math.round(weather.main.feels_like)}°C</p>
        <p className='humidity'>Humidity {weather.main.humidity}%</p>
      </div>
    </div>
  )
}