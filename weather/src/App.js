import React,{useState} from 'react';
import './App.css';

const api = {
  key :"b0c4ee2b794ad203dfb0bcb5f28ef007",
  base:'https://api.openweathermap.org/data/2.5/'
};

function App() {

  const [query,setQuery] = useState('');
  const [weather,setWeather]= useState('');

  const search = async(e) => {
    if (e.key==="Enter"){
      const url= await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      const response = await url.json();
      setWeather(response);
      
      console.log(response);
      
      

    }
         
      

    }
    
      

    
   

  

  return (
    <div className={(typeof weather.main != "undefined")? ((weather.main.temp > 16)? 'App warm' :'App'):'App'}>
      <main>
         <h1>Weather Today</h1>
      <div className="search-box">
        <input type="text" placeholder="Search..." className="search-bar"
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        />
        

      </div>
      {(typeof weather.main != "undefined")?(
        <div>
        <div className="location-box">
          <div className="location">{weather.name},{weather.sys.country}</div>
          <div className="date">{new Date().toDateString()}</div>
          
        </div>
        <div className="weather-box">
          <div className ="temp">{Math.round(weather.main.temp)}°C</div>
          <div className="weather">{weather.weather[0].main}</div>
  
        </div>
  
        </div>
          

      ) :('')}
      
      

      </main>
     
    </div>
  );
}

export default App;
