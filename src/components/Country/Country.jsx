import { useState } from 'react';
import './Country.css'

const Country = ({ country ,handleVisitedCountry, handleVisitedFlags}) => {
    const {name, capital, area, flags, population, cca3} = country;


    const [visited, setVisited] = useState(false);
    
    const handleVisited = () => {
        setVisited(!visited);
    }

    
    // const passWithParams = () => {
    //     handleVisitedCountry(country);
    // }
    console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited ? 'visited' : 'not-visited'}`}>
            <h2 style={{color: visited ? "purple" : "white"}}>Name: {name?.common} </h2>
            <h3>Capital: {capital}</h3>
            <h4>Population: {population} </h4>
            <h4>Area: {area} </h4>
            <p><small>Code: {cca3}</small></p>
            <img src={flags?.png} alt="" />
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <br />
            <button>Add flag</button>
            <br />
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited the country.' : 'I want to visit'}
        </div>
    );
};

export default Country;