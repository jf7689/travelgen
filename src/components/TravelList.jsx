export function TravelList({ landmarkList }) {
    return (
        <div>
            {landmarkList.map((location, i) => {
                return (
                    <div key={i}>
                        <h3>{location.name}</h3>
                        <img src={location.photo} alt={`Photo of ${location.name}`} width="480px" height="270px"/>
                    </div>
                );
            })}
        </div>
    );
}