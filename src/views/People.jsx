import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";


const People = (props) => {
    const {identifier} = useParams();
    const [results, setResults] = useState({});
    const [homeworld, setHomeworld] = useState({});
    const history = useHistory();

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${identifier}/`)
        .then(res => {
            setResults(res.data);
            getHomeworld(res.data.homeworld);
            console.log(res.data);
        })
        .catch(err => history.push("/not_found"));
        
    },[identifier])

        const getHomeworld = (url) => {
        axios.get(url)
        .then(res => {
            setHomeworld(res.data);
            console.log(res.data);
        })
        .catch();
    }

    return(
        <div className="w-50 mx-auto">
            <h1>{results.name}</h1>
            <p><strong>Height: </strong>{results.height} </p>
            <p><strong>Mass: </strong>{results.mass}</p>
            <p><strong>Hair Color: </strong>{results.hair_color}</p>
            <p><strong>Skin Color: </strong>{results.skin_color}</p>
            <p><strong>Home World: </strong>{homeworld.name ? <Link to={{pathname: `/planets/${results.homeworld.split('/').reverse().splice(1).shift()}`}}>{homeworld.name}</Link> : "Loading..."}</p>
        </div>
    )
    
}

export default People