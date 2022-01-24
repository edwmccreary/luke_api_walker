import React, { useState, useEffect } from "react";
import axios from 'axios';

const Result = (props) => {

    const [values,setValues] = useState([]);

    return(
        <p>
            <strong>{props.item}:&nbsp;</strong>
            {props.value}
        </p>
    )
}

export default Result;