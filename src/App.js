import logo from './logo.svg';
import './App.css';
import {useState} from "react"


const api = {
  key: '42cee77d95c6ee940c478b7d68158d61',
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
  }

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
    });
  }
  return (

    <div style={{
      backgroundImage: `url("https://img.freepik.com/free-vector/sky-background-video-conferencing_23-2148639325.jpg")`,
      backgroundSize: `cover`, 
      backgroundPosition: 'center',
      height: '100vh',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    
    <div className="App">

      <header className="App-header">
        {/*Header*/}
        <h1>Weather app</h1>

        {/*search box*/}
        <div>
        <input 
          type='text' 
          placeholder="Enter city/town"
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={searchPressed} style={{ padding: '10px', marginLeft: '10px', borderRadius: '5px' }}>
          Search
          </button>
        </div>
        
        {/*see if weather.main is not undefined*/}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/*location*/}
            <p>{weather.name}</p>

            {/*temperature in Celcius*/}
            <p>{weather.main.temp}°C</p>

            {/*temperature in Farenheit */}
            <p>{convertToFahrenheit(weather.main.temp).toFixed(2)}°F </p>

            {/*conditions*/}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>

        ):( 
        ""
        )}
      </header>
    </div>
  </div>

  );
}

export default App;
