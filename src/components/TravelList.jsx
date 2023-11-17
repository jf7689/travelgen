import { useState } from "react";

export function TravelList({ landmarkList }) {
    const [expanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(!expanded);
    }

    return (
        <div onClick={expand}>
            <h2>Travel List</h2>
            {expanded ? (
                landmarkList.map((location, i) => {
                    return (
                        <div key={i}>
                            <h3>{location.name}</h3>
                            <img src={location.photo} alt={`Photo of ${location.name}`} width="480px" height="270px"/>
                        </div>
                    );
                })
            ) : null}
        </div>
    );
}