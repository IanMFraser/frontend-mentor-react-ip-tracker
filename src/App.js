import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MapDisplay from './components/MapDisplay';
import Display from './components/Display'
import axios from 'axios'
import './App.css';

const App = () => {
  const [ip, setIp] = useState('192.212.174.101') 
  const [location, setLocation] = useState('')
  const [timezone, setTimezone] = useState('')
  const [isp, setIsp] = useState('')
  const [latLong, setLatLong] = useState({lat: 40.853721, lng: -73.938243})

  const apiKey = process.env.REACT_APP_IP_API_KEY;
  const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`

  //collect api from url
  const fetchApi = () => {
    axios
      .get(url)
      .then(res => {
        console.log(res.data)
        setIp(res.data.ip)
        setLocation(`${res.data.city}, ${res.data.state_prov} ${res.data.zipcode}`)
        setTimezone(`${res.data.time_zone.offset}:00`)
        setIsp(res.data.isp)
        setLatLong({lat: res.data.latitude, lng: res.data.longitude})
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(fetchApi, [ip, url])
  
  //handle form submission
  const submitHandler = e => {
    e.preventDefault();
    fetchApi();
  }

  //handle new ip input
  const newIpHandler = e => {
    const ipRegex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/

    if(e.target.value.match(ipRegex)){
      setIp(e.target.value)
    } 
  }

  return (
    <div className="App">
      <Header ipHandler={newIpHandler} submitHandler={submitHandler}  />
      <Display ip={ip} location={location} timezone={timezone} isp={isp} />
      <MapDisplay latLong={latLong}/>
    </div>
  );
}

export default App;
