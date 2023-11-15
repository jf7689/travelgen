import { useEffect, useState } from "react";
import data from "../data/data.json";

export function Landmark() {
    // Landmark data
    const [landmark, setLandmark] = useState({
        name: "",
        photo: "",
        maps_url: "",
    });
    
    // Get a random landmark from local json
    function randomLandmark() {
        const temp = data.landmarks[Math.floor(Math.random() * data.landmarks.length)];
        setLandmark({
            name: temp.name,
            photo: temp.photo,
            maps_url: temp.maps_url
        })
    }

    // Checking to see if varibles are as expected
    function check() {
        console.log(landmark);
    }

    // Generate initial landmark when arriving on site
    useEffect(() => {
        randomLandmark();
    }, [])

    return (
        <>
            <h1>{landmark.name}</h1>
            <a target="_blank" href={landmark.maps_url}>Google Maps</a>
            <div>
                <img src={landmark.photo} alt={`Photo of ${landmark.name}`} width="1280px" height="720px"/>
            </div>
            <button onClick={randomLandmark}>Generate Landmark</button>
            <button onClick={check}>Check Landmark</button>
        </>
    );
}