import React from 'react'

const Display = ({ip, location, timezone, isp}) => {
    return(
        <div className="DisplayResults">
            <div className="result">
                <h5>IP ADDRESS</h5>
                <p>{ip}</p>
            </div>
            <hr></hr>
            <div className="result">
                <h5>LOCATION</h5>
                <p>{location}</p>
            </div>
            <hr></hr>
            <div className="result">
                <h5>TIMEZONE</h5>
                <p>{timezone}</p>
            </div>
            <hr></hr>
            <div className="result">
                <h5>ISP</h5>
                <p>{isp}</p>
            </div>
        </div>
    )
}

export default Display