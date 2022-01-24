import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Result from "../components/Result";
import { useHistory } from "react-router-dom";


const Results = (props) => {
    const {category, identifier} = useParams();
    const [results, setResults] = useState({});
    const history = useHistory();

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${identifier}/`)
        .then(res => {
            console.log(`Cat: ${category}, ID: ${identifier}`)
            console.log("Getting results from params: " + res.data.name);
            console.log(res);
            setResults(res.data);
        })
        .catch(err => history.push("/not_found"));
    },[category, identifier])

    return(
        <div className="w-50 mx-auto">
            {
            Object.keys(results).map((key,i)=>{
                return <Result key={i} item={key} value={results[key]}/>
            })
            }
        </div>
    )
}

export default Results