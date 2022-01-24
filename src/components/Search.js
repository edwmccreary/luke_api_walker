import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Search = (props) => {

    const history = useHistory();
    const [categories,setCategories] = useState([]);
    const [category,setCategory] = useState("");
    const [identifier,setIndentifier] = useState("");

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(res => {
            console.log(res);
            setCategories(Object.keys(res.data));    
        })
        .catch(err => console.log(err))
    },[])

    const OnSubmitHandler = (e) => {
        e.preventDefault();
        history.push(`/${category}/${identifier}`);
    }

    return(
        <div className="w-50 mx-auto">
            <form onSubmit={OnSubmitHandler} >
                <label htmlFor="category">Search for:</label>
                <select name="category" onChange={(e)=>{setCategory(e.target.value)}}>
                    {
                    categories.map((cat, i)=>{
                        return <option key={i} value={cat}>{cat}</option>;
                    })
                    }
                </select>
                <label htmlFor="identifier">ID:</label>
                <input type="number" name="identifier" onChange={(e)=>{setIndentifier(e.target.value)}}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Search