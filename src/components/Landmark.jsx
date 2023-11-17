import { useEffect, useState } from "react";
import { TravelList } from "./TravelList";
import data from "../data/data.json";
import styles from "../assets/styles/landmark.module.css";


export function Landmark() {
    // Landmark data
    const [landmark, setLandmark] = useState({
        name: "",
        photo: "",
        maps_url: "",
    });
    const [landmarkList, setLandmarkList] = useState([]);
    
    // Get a random landmark from local json
    function randomLandmark() {
        const temp = data.landmarks[Math.floor(Math.random() * data.landmarks.length)];
        setLandmark({
            name: temp.name,
            photo: temp.photo,
            maps_url: temp.maps_url
        });
    }

    function addLandmark() {
        setLandmarkList( curLandmarks => {
            return [...curLandmarks, landmark];
        });
    }

    // Checking to see if varibles are as expected
    function check() {
        console.log(landmark);
        console.log(landmarkList);
    }

    // Generate initial landmark when arriving on site
    useEffect(() => {
        randomLandmark();
    }, [])

    return (
        <div className={styles.container}>
            <TravelList landmarkList={landmarkList}/>
            <div>
                <h1 className={styles.title}>{landmark.name}</h1>
                <a target="_blank" href={landmark.maps_url}>Google Maps</a>
                <div>
                    <img className={styles.photo} src={landmark.photo} alt={`Photo of ${landmark.name}`}/>
                    <button onClick={addLandmark}>+</button>
                </div>
                <button onClick={randomLandmark}>Generate Landmark</button>
                <button onClick={check}>Check Landmark</button>
            </div>
        </div>
    );
}