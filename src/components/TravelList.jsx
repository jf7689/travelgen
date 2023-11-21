import { useState } from "react";
import styles from "../assets/styles/travelList.module.css"

export function TravelList({ landmarkList }) {
    const [expanded, setExpanded] = useState(true);

    function expand() {
        setExpanded(!expanded);
    }

    return (
        <div className={styles.container} onClick={expand}>
            <h2 className={styles.expandable}>Travel List <span>{expanded ? "-" : "+"}</span></h2>
            <div className={styles.expandableContent}>
            {expanded ? (
                landmarkList.map((location, i) => {
                    return (
                        <div key={i}>
                            <h3>{location.name}</h3>
                            <img className={styles.photo} src={location.photo} alt={`Photo of ${location.name}`}/>
                        </div>
                    );
                })
                ) : null
            }
            </div>
        </div>
    );
}