import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";


const Planet = (props) => {
    const {identifier} = useParams();
    const [results, setResults] = useState({});
    const history = useHistory();

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${identifier}/`)
        .then(res => {
            setResults(res.data);
            console.log(res.data);
        })
        .catch(err => history.push("/not_found"));
        
    },[identifier])

    return(
        <div className="w-50 mx-auto">
            <h1>{results.name}</h1>
            <p><strong>Climate: </strong>{results.climate}</p>
            <p><strong>Terrain: </strong>{results.terrain}</p>
            <p><strong>Surface Water: </strong>{results.surface_water}</p>
            <p><strong>Population: </strong>{results.population}</p>
        </div>
    )
    
}

export default Planet