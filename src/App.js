import React, {useState,useEffect} from 'react'
import './App.css';

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('Mumbai')
  useEffect( () => {
    const fetchApi =async () =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=074da6b6822590cafa8ebc99142b2fcb`;
    const response = await fetch(url);
    const resJson = await response.json();
    setCity(resJson.main);
    }
    fetchApi();
  },[query])
  return (
    <>
    <div className="container">
      <div className="box">
        <div className="inputdata">
          <form onSubmit={(e) => {
              e.preventDefault();
              setQuery(search);
          }}>
          <input type="search" placeholder="enter city name" value={search} className="inputfield" onChange={(event) => {
              setSearch(event.target.value);
          }}/>
          <button className="btn-get-weather" type="submit"></button>
          </form>
        </div>
        {!city ? (
          <p className="errormsg">No city found</p>
        ) : (
            <div className="info">
            <h2 className="location"><i className="fa fa-street-view" aria-hidden="true"></i>{query}</h2>
            <h1 className="temp">{city.temp}<sup>o</sup>Cel</h1>
            <h3 className="minmax">Min:{city.temp_min}<sup>o</sup>cel | Max:{city.temp_max}<sup>o</sup>cel</h3>
          </div>
          )}
      </div>
      </div>
    </>
  );
}

export default App;
