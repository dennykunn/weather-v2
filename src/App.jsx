import React, { useEffect, useState } from 'react'
import './App.css';
import moment from 'moment'

const api = {
  key: "57ec85b42d5fdc10272837a5ab565d55",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    dumai();
  }, [])

  const enter = evt => {
    if(evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

  const search = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      setQuery('');
      console.log(result);
    });
  }

  // const dateBuilder = (d) => {
  //   let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ];
  //   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sadurday", ]

  //   let day = days[d.getDay()];
  //   let date = d.getDate();
  //   let month = months[d.getMonth()];
  //   let year = d.getFullYear();

  //   return `${day} ${date} ${month} ${year}`

      // -- {dateBuilder(new Date())} --
  // }

  const dumai = () => {
    fetch(`${api.base}weather?q=Dumai&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      setQuery('');
      console.log(result);
    });
  }

  const london = () => {
    fetch(`${api.base}weather?q=London&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      setQuery('');
      console.log(result);
    });
  }

  const tokyo = () => {
    fetch(`${api.base}weather?q=Tokyo&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      setQuery('');
      console.log(result);
    });
  }

  const paris = () => {
    fetch(`${api.base}weather?q=Paris&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      setQuery('');
      console.log(result);
    });
  }

  const california = () => {
    fetch(`${api.base}weather?q=California&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      setQuery('');
      console.log(result);
    });
  }

  const dateTime = new Date()


  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp < 12) ? 'App rainy' : 'App') : 'App'}>
      <div className="flex w-full h-full">
        <div className="left py-12 px-24">
          <h3 className="font-bold">the.weather</h3>
          {(typeof weather.main != "undefined") ? (
            <div className="weather flex flex-row items-end space-x-8">
              <p className="text-8xl font-semibold" name="temp">{Math.round(weather.main.temp)}&deg;C</p>
              <div className="">
                <p className="-ml-1 text-6xl font-semibold" name="city">{weather.name}</p>
                <p className="text-md" name="date">{moment(dateTime).format('llll')}</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="-mb-5" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} name="icon"/>
                <p className="text-lg" name="describtion">{weather.weather[0].main}</p>
              </div>
            </div>
          ) : ('')} 
        </div>

        <div className="right h-full">
          <div className="flex">
            <input className="another-location w-full text-white border-b border-white mx-12 pt-12 outline-none placeholder-gray-200" type="text" placeholder="Another location" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={enter}/>
            <button className="w-32 h-24 bg-gray-50" onClick={search}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-auto stroke-current text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col py-12 mx-12 items-start space-y-6 border-b border-white">
            <button onClick={dumai}>Dumai</button>
            <button onClick={london}>London</button>
            <button onClick={tokyo}>Tokyo</button>
            <button onClick={paris}>Paris</button>
            <button onClick={california}>California</button>
          </div>

          
          {(typeof weather.main != "undefined") ? (
            <div className="flex flex-col py-12 mx-12 space-y-6 border-b border-white">
              <h4 className="font-semibold text-lg">Weather Details</h4>
              <div className="flex justify-between">
                <p>Cloudy</p>
                <span>{weather.clouds.all}%</span>
              </div>
              <div className="flex justify-between">
                <p>Humadity</p>
                <span>{weather.main.humidity}%</span>
              </div>
              <div className="flex justify-between">
                <p>Wind</p>
                <span>{weather.wind.speed}km/h</span>
              </div>
              <div className="flex justify-between">
                <p>Rain</p>
                <span>0mm</span>
              </div>
            </div>
          ) : ('')} 
        </div>
      </div>
    </div>
  );
}

export default App;
