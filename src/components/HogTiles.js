import React, { useState } from "react";
import  hogs  from "../porkers_data"

function HogTiles() {
    const [selectedHog, setSelectedHog] = useState(null)

    const handleClick = (hog) => {
        setSelectedHog(hog)
    } 

    return (
        <div>
            {hogs.map((hog) => (
                <div key={hog.name} onClick={() => handleClick(hog)}>
                    <h2>{hog.name}</h2>
                    <img src={hog.image} alt={hog.name}/>
                    {selectedHog === hog ? (
                        <div>
                            <p>Specialty: {hog.specialty}</p>
                            <p>Weight: {hog.weight}</p>
                            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                            <p>Higest Medal: {hog["highest medal achieved"]}</p>
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    )
}

export default HogTiles