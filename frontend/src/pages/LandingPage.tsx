import React from "react";
import NavBar from "../components/Navbar/NavBar";
import {useState, useEffect} from "react";
import instance from "../components/Axios";



const LandingPage = () => {
    const [vhiechle, setVheicles] = useState([]);
    
    // fetch data from backend
    const fetchData = () => {
        instance.get('vheicles/').then((response) => {
            setVheicles(response.data);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div> hello world</div>
    )
}

export default LandingPage;