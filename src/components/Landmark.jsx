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
        country: []
    });
    const [landmarkList, setLandmarkList] = useState([]);
    const [lastIndex, setLastIndex] = useState(-1);
    
    // Get a random landmark from local json
    function randomLandmark() {
        let rand = Math.floor(Math.random() * data.landmarks.length);
        // Prevent repeat of last selection
        while (rand === lastIndex)
        {
            rand = Math.floor(Math.random() * data.landmarks.length);
        }

        const temp = data.landmarks[rand];
        setLandmark({
            name: temp.name,
            photo: temp.photo,
            maps_url: temp.maps_url,
            country: temp.country
        });
        setLastIndex(rand);
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
            <div className={styles.listContainer}>
                <TravelList landmarkList={landmarkList}/>
            </div>
            <div className={styles.genContainer}>
                <h1 className={styles.title}>{landmark.name}</h1>
                <a target="_blank" href={landmark.maps_url}>Google Maps</a>
                <div>
                    <img className={styles.photo} src={landmark.photo} alt={`Photo of ${landmark.name}`}/>
                    <button onClick={addLandmark}>+</button>
                </div>
                <button className={styles.button} onClick={randomLandmark}>Generate Landmark</button>
                <div>
                <button onClick={check}>Check Landmark</button>
                </div>
            </div>
        </div>
    );
}