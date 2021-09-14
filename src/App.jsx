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

  const dateBuilder = (d) => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ];
    let days = ["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Sadurday,", ]

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

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

  // let time = new Date().toLocaleString();
  const time = moment().format('LT');


  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp <= 12) ? 'App rainy' : 'App') : 'App'}>
      <div className="flex md:flex-row flex-col w-full h-full">
        <div className="left md:w-2/3 w-full lg:py-12 md:py-10 py-8 md:h-full xl:px-20 lg:px-16 px-12 md:block hidden">
          <h3 className="font-bold text-lg">the.weather</h3>
          {(typeof weather.main != "undefined") ? (
            <div className="weather flex-row md:items-end lg:space-x-8 space-x-6 md:flex hidden">
              <p className="xl:text-8xl lg:text-7xl text-6xl font-semibold" name="temp">{Math.round(weather.main.temp)}&deg;C</p>
              <div>
                <p className="-ml-1 xl:text-6xl lg:text-5xl text-4xl font-semibold" name="city">{weather.name}</p>
                <p className="lg:text-base text-sm" name="date">{dateBuilder(new Date())}</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="-mb-5 lg:w-28 lg:h-28 w-24 h-24" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} name="icon"/>
                <p className="lg:text-lg text-base" name="describtion">{weather.weather[0].main}</p>
              </div>
            </div>
          ) : ('')}
        </div>

        

        <div className="right lg:w-1/3 md:w-2/6 w-full lg:h-full md:block hidden">
          <div className="flex">
            <input className="another-location w-full text-white border-b border-white xl:pt-12 xl:mx-12 lg:pt-10 lg:mx-10 pt-8 mx-8 outline-none placeholder-gray-200 xl:text-lg text-base" type="text" placeholder="Another location..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={enter}/>
            <button className="xl:w-32 xl:h-24 lg:w-28 lg:h-20 w-24 h-16 bg-gray-50" onClick={search}>
              <svg xmlns="http://www.w3.org/2000/svg" className="xl:h-7 xl:w-7 lg:h-6 lg:w-6 md:w-5 md:h-5 w-4 h-4 mx-auto stroke-current text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col xl:py-12 xl:mx-12 lg:py-10 lg:mx-10 py-8 mx-8 items-start lg:space-y-6 space-y-4 border-b border-white xl:text-lg lg:text-base text-sm">
            <button onClick={dumai}>Dumai</button>
            <button onClick={london}>London</button>
            <button onClick={tokyo}>Tokyo</button>
            <button onClick={paris}>Paris</button>
            <button onClick={california}>California</button>
          </div>

          
          {(typeof weather.main != "undefined") ? (
            <div className="flex flex-col xl:py-12 xl:mx-12 lg:py-10 lg:mx-10 py-8 mx-8 lg:space-y-6 space-y-4 border-b border-white xl:text-lg lg:text-base text-sm">
              <h4 className="font-semibold xl:text-xl lg:text-lg text-base">Weather Details</h4>
              <div className="flex justify-between">
                <p>Country</p>
                <span>{weather.sys.country}</span>
              </div>
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
                <p>Temperature Min</p>
                <span>{weather.main.temp_min}&deg;C</span>
              </div>
              <div className="flex justify-between">
                <p>Temperature Max</p>
                <span>{weather.main.temp_max}&deg;C</span>
              </div>
            </div>
          ) : ('')} 
        </div>

        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp <= 12) ? 'bungkus rainy' : 'bungkus') : 'bungkus'}>
          {/* mode atas ukuran medium */}
          {(typeof weather.main != "undefined") ? (
            <div className="top md:hidden sm:pt-8 sm:px-8 pt-6 px-6">
              <div className="flex justify-between">
                <div className="space-y-1">
                  <div className="text-4xl">{time}</div>
                  <p className="text-lg -mt-2" name="date">{dateBuilder(new Date())}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-4xl" name="city">{weather.name}</p>
                  <p className="text-xl">{weather.sys.country}</p>
                </div>
              </div>
            </div>
          ) : ('')} 

          {/* search mode <md */}
          {(typeof weather.main != "undefined") ? (
            <div className="center pb-4 items-end justify-center md:hidden flex">
              <div className="flex sm:w-80 h-12 w-72 items-center justify-between rounded-full bg-white">
                <input className=" px-5 rounded-l-full text-black outline-none placeholder-gray-600" type="text" placeholder="Another location..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={enter}/>
                <button className="px-4" onClick={search}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ) : ('')} 

          {/* mode bawah ukuran medium */}
          {(typeof weather.main != "undefined") ? (
            <div className="bottom md:hidden flex justify-between text-black sm:px-8 sm:py-8 px-4 py-6 sm:space-x-5 space-x-4">
              <div className="flex">
                <div className="flex flex-col justify-center items-center ">
                  <img className="-mt-8 sm:w-32 sm:h-32 w-20 h-20" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} name="icon"/>
                  <p className="sm:-mt-8 -mt-4 sm:text-lg text-sm font-semibold" name="describtion">{weather.weather[0].main}</p>
                </div> 
                <div className="flex flex-col items-center justify-center space-y-5">
                  <div className="sm:text-4xl text-3xl flex sm:flex-col flex-row justify-center items-center sm:space-x-0 space-x-3">
                    <div className="flex sm:flex-row flex-col items-center">
                      <p>{weather.main.temp_max}&deg;</p>
                      <div className="w-3 sm:mx-3 my-2 border-t border-pink-500">
                      </div>
                      <span className="sm:text-base text-sm">TempMax</span>
                    </div>
                    <div className="sm:mt-4 flex sm:flex-row flex-col items-center">
                      <p>{weather.main.temp_min}&deg;</p>
                      <div className="w-3 sm:mx-3 my-2 border-t border-pink-500">
                      </div>
                      <span className="sm:text-base text-sm">TempMin</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex  text-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 bg-opacity-30"></div>
                  <p className="mt-3 font-semibold sm:text-sm text-xs">Humidity(%)</p>
                  <div className="sm:w-4 w-3 sm:my-2 my-2 border-t border-pink-500"></div>
                  <p className="sm:text-2xl text-xl flex items-center">{weather.main.humidity}&deg;</p>
                </div>
                <div className="flex flex-col items-center justify-center mx-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 bg-opacity-30"></div>
                  <p className="mt-3 font-semibold sm:text-sm text-xs">Wind(km/h)</p>
                  <div className="sm:w-4 w-3 sm:my-2 my-2 border-t border-pink-500"></div>
                  <p className="sm:text-2xl text-xl flex items-center">{weather.wind.speed}</p>
                </div>
                <div className="sm:flex hidden flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 bg-opacity-30"></div>
                  <p className="mt-3 font-semibold sm:text-sm text-xs">Cloudy(%)</p>
                  <div className="sm:w-4 w-3 sm:my-2 my-2 border-t border-pink-500"></div>
                  <p className="sm:text-2xl text-xl flex items-center">{weather.clouds.all}</p>
                </div>
              </div>
            </div> 
          ) : ('')} 
          {/* batas */}
        </div>

      </div>
    </div>
  );
}

export default App;
