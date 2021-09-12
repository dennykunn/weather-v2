import React, { useEffect, useState } from 'react'
import './App.css';
// import moment from 'moment'

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

  // const dateTime = new Date()


  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp < 12) ? 'App rainy' : 'App') : 'App'}>
      <div className="flex lg:flex-row flex-col w-full h-full">
        <div className="left lg:w-2/3 w-full lg:py-12 lg:h-full lg:px-20">
          <h3 className="font-bold text-lg lg:block hidden">the.weather</h3>
          {(typeof weather.main != "undefined") ? (
            <div className="weather flex flex-row lg:items-end space-x-8 lg:flex hidden">
              <p className="text-8xl font-semibold" name="temp">{Math.round(weather.main.temp)}&deg;C</p>
              <div>
                <p className="-ml-1 text-6xl font-semibold" name="city">{weather.name}</p>
                <p className="text-base" name="date">{dateBuilder(new Date())}</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="-mb-5 w-28 h-28" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} name="icon"/>
                <p className="text-lg" name="describtion">{weather.weather[0].main}</p>
              </div>
            </div>
          ) : ('')} 

          
        </div>

        {/* mode atas ukuran medium */}
        {(typeof weather.main != "undefined") ? (
          <div className="lg:hidden h-4/6 pt-14 px-14">
            <div className="flex justify-between">
              <p className="text-2xl -mt-2" name="date">{dateBuilder(new Date())}</p>

              <div className="flex h-12 rounded-full bg-white">
                <input className="w-64 px-5 rounded-l-full text-black outline-none placeholder-gray-600" type="text" placeholder="Another location..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={enter}/>
                <button className=" px-4" onClick={search}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="xl:h-7 xl:w-7 h-6 w-6 mx-auto stroke-current text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              <div className="text-right -mt-3">
                <p className="-ml-1 text-6xl" name="city">{weather.name}</p>
                <p className="text-xl">{weather.sys.country}</p>
              </div>
            </div>
          </div>
        ) : ('')} 
        
        {/* mode bawah ukuran medium */}
        <div className="lg:hidden flex justify-between bg-green-200 h-2/6 text-black px-14 py-8 space-x-5">
          <div className="flex">
            <div className="flex flex-col items-center justify-center pr-8">
              <img className="w-36 h-36" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} name="icon"/>
              <p className="-mt-4 text-lg" name="describtion">{weather.weather[0].description}</p>
            </div>  
            <div className="flex flex-col items-center justify-center space-y-5">
              <p className="text-5xl flex items-center">42&deg;<div className="w-5 mx-3 border-t border-pink-500"></div><span className="text-xl">External</span></p>
              <p className="text-5xl flex items-center">42&deg;<div className="w-5 mx-3 border-t border-pink-500"></div><span className="text-xl">Internal</span></p>
            </div>
          </div>

          <div className="flex space-x-6">
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 bg-opacity-30"></div>
              <p className="mt-2">Humidity (%)</p>
              <div className="w-5 my-4 border-t border-pink-500"></div>
              <p className="text-3xl flex items-center">20.3&deg;</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-green-500 bg-opacity-30"></div>
              <p className="mt-2">CO2 Levels (pppm)</p>
              <div className="w-5 my-4 border-t border-pink-500"></div>
              <p className="text-3xl flex items-center">527.04</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-green-500 bg-opacity-30"></div>
              <p className="mt-2">TVOC Levels (ppb)</p>
              <div className="w-5 my-4 border-t border-pink-500"></div>
              <p className="text-3xl flex items-center">824</p>
            </div>
          </div>
        </div> 
        {/* batas */}

        <div className="lg-right lg:w-1/3 md:w-2/6 w-full lg:h-full lg:block hidden">
          <div className="flex">
            <input className="another-location w-full text-white border-b border-white mx-12 pt-12 outline-none placeholder-gray-200 xl:text-lg text-base" type="text" placeholder="Another location..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={enter}/>
            <button className="xl:w-32 xl:h-24 w-28 h-20 bg-gray-50" onClick={search}>
              <svg xmlns="http://www.w3.org/2000/svg" className="xl:h-7 xl:w-7 h-6 w-6 mx-auto stroke-current text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col py-12 mx-12 items-start space-y-6 border-b border-white xl:text-lg text-base">
            <button onClick={dumai}>Dumai</button>
            <button onClick={london}>London</button>
            <button onClick={tokyo}>Tokyo</button>
            <button onClick={paris}>Paris</button>
            <button onClick={california}>California</button>
          </div>

          
          {(typeof weather.main != "undefined") ? (
            <div className="flex flex-col py-12 mx-12 space-y-6 border-b border-white xl:text-lg text-base">
              <h4 className="font-semibold xl:text-xl text-lg">Weather Details</h4>
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
      </div>
    </div>
  );
}

export default App;
