import { useEffect, useState } from "react";
import { TravelList } from "./TravelList";
import data from "../data/data.json";
import styles from "../assets/styles/landmark.module.css";
import mapIcon from "../assets/images/mapsIcon.png"


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

    // Add landmark
    function addLandmark() {
        setLandmarkList( curLandmarks => {
            return [...curLandmarks, landmark];
        });
    }

    // Clear Travel List
    function clearTraveList() {
        setLandmarkList([]);
    }

    // Set landmarkList from a child component
    function listCallback(importList) {
        setLandmarkList(importList);
    }

    // Generate initial landmark when arriving on site
    useEffect(() => {
        randomLandmark();
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.listContainer}>
                <TravelList landmarkList={landmarkList} listCallback={listCallback}/>
            </div>
            <div className={styles.genContainer}>
                <h1 className={styles.title}>{landmark.name}</h1>
                    <a className={styles.mapContainer} target="_blank" href={landmark.maps_url}>
                        <img className={styles.mapIcon} src={mapIcon} alt="Google maps icon"/>
                        Google Maps
                    </a>
                <div>
                    <img className={styles.photo} src={landmark.photo} alt={`Photo of ${landmark.name}`}/>
                </div>
                <button className={styles.landmarkBtn} onClick={randomLandmark}>Generate Destination</button>
                <button className={styles.landmarkBtn} onClick={addLandmark}>Add To Travel List</button>
                <button className={styles.landmarkBtn} onClick={clearTraveList}>Reset Travel List</button>
            </div>
        </div>
    );
}