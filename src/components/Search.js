import React, {useState} from 'react';
import axios from "axios";
import {myurl} from "./MyAxios";

function Search(props) {
    const [search,setSearch] = useState()
    axios.post(myurl + "api/product/search",{result:search},{withCredentials:true})
        .then(res => console.log(res.data))
    return (
        <div>
            <input type="text" onChange={event => setSearch(event.target.value)}/>
        </div>
    );
}

export default Search;