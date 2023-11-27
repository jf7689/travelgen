import { useState } from "react";
import styles from "../assets/styles/travelList.module.css"

export function TravelList({ landmarkList }) {
    const [expandedList, setExpandedList] = useState(true);
    const [expandedDownload, setExpandedDownload] = useState(false);

    function expandDownload() {
        setExpandedDownload(!expandedDownload);
    }

    function expandList() {
        setExpandedList(!expandedList);
    }

    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.expandable} onClick={expandDownload}>Download Settings <span>{expandedDownload ? "-" : "+"}</span></h2>
            </div>
            <div>
                <h2 className={styles.expandable} onClick={expandList}>Travel List <span>{expandedList ? "-" : "+"}</span></h2>
                <div className={styles.expandableContent}>
                {expandedList ? (
                    landmarkList.map((location, i) => {
                        return (
                            <div key={i}>
                                <h3 className={styles.title}>{location.name}</h3>
                                <div className={styles.photoContainer}>
                                    <img className={styles.photo} src={location.photo} alt={`Photo of ${location.name}`}/>
                                </div>
                            </div>
                        );
                    })
                    ) : null
                }
                </div>
            </div>
        </div>
    );
}