import React from 'react';

const Header = ({ipHandler, submitHandler}) => {
    return(
        <header className="Header">
            <h1>IP Address Tracker</h1>
            <form onSubmit={submitHandler}>
                <input type="text" className="ip-input" onChange={ipHandler} placeholder="Search for any IP address"></input>
                <button type="submit" className="submit-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
                </button>
            </form>
        </header>
    )
}

export default Header;