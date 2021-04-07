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
  const [isPrivate, setIsPrivate] = useState(false)

  const APIKEY = process.env.REACT_APP_IP_API_KEY;
  const URL = `https://api.ipgeolocation.io/ipgeo?apiKey=${APIKEY}&ip=`

  //collect api from url
  const fetchApi = () => {
    axios
      .get(`${URL}${ip}`)
      .then(res => {
        console.log(res.data)
        setIsPrivate(false)
        setIp(res.data.ip)
        setLocation(`${res.data.city}, ${res.data.state_prov} ${res.data.zipcode}`)
        setTimezone(`UTC ${res.data.time_zone.offset}:00`)
        setIsp(res.data.isp)
        setLatLong({lat: res.data.latitude, lng: res.data.longitude})
      })
      .catch(error => {
        if(error.response) {
          console.log(error.response)
          setIsPrivate(true)
        } else if (error.request) {
          console.log('something went wrong!')
        } else {
          console.log(error)
        }
      })
  }

  useEffect(fetchApi, [ip, URL])
  
  //handle form submission
  const submitHandler = e => {
    e.preventDefault();
    fetchApi();
  }

  //handle new ip input
  const newIpHandler = e => {
    const ipRegex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/
    const domainRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/

    if(e.target.value.match(ipRegex) || e.target.value.match(domainRegex)){
      setIp(e.target.value)
    } 
  }

  let results = {
    "ip": ip,
    "location": location,
    "timezone": timezone,
    "isp": isp,
    "isPrivate": isPrivate
  }

  return (
    <div className="App">
      <Header ipHandler={newIpHandler} submitHandler={submitHandler}  />
      <Display results={results} />
      <MapDisplay latLong={latLong}/>
    </div>
  );
}

export default App;
