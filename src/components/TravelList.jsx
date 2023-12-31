import { useState } from "react";
import styles from "../assets/styles/travelList.module.css"

export function TravelList({ landmarkList, listCallback}) {
    const [expandedList, setExpandedList] = useState(true);
    const [expandedDownload, setExpandedDownload] = useState(false);

    function expandDownload() {
        setExpandedDownload(!expandedDownload);
    }

    function expandList() {
        setExpandedList(!expandedList);
    }

    // Import a previously made travel list
    function importList() {
        const file = document.getElementById("jsonFile");

        // Read file from input tag and fill travel list section
        new Response(file.files[0]).json().then(json => {
            listCallback(json);
        })
    }

    // Download travel list as json file
    function exportList() {
        // String for href
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            // Convert list of landmarks to json with formatting
            JSON.stringify(landmarkList, null, 4)
        )}`;

        // Download
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "TravelList.json";
    
        link.click();
    }

    // Remove specified landmark from travel list
    function removeLandmark(index) {
        let tempList = [...landmarkList];
        tempList.splice(index, 1)
        listCallback(tempList);
    }

    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.expandable} onClick={expandDownload}>Import/Export JSON <span>{expandedDownload ? "-" : "+"}</span></h2>
                <div>
                {expandedDownload ? (
                        <div className={styles.expandableDownload}>
                            <div className={styles.import}>
                                <input type="file" id="jsonFile"/>
                                <button className={styles.fileButton} onClick={importList}>Import</button>
                            </div>
                            <div className={styles.export}>
                                <button className={styles.fileButton} onClick={exportList}>Export</button>
                            </div> 
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
                                    <div className={styles.removeBtn} onClick={() => removeLandmark(i)}>Remove</div>
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