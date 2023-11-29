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

    function downloadList() {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
          JSON.stringify(landmarkList, null, 4)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "TravelList.json";
    
        link.click();
      };

    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.expandable} onClick={expandDownload}>Download Settings <span>{expandedDownload ? "-" : "+"}</span></h2>
                <div>
                {expandedDownload ? (
                        <div className={styles.expandableDownload}> 
                            <button onClick={downloadList}>Download</button>
                        </div>
                    ) : null
                }
                </div>
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