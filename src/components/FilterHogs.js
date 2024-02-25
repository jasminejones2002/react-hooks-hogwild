import React, { useState } from "react";

function FilterHogs({ handleFilterChange }) {
    const [greased, setGreased] = useState(false)

    const handleGreasedFilter = (e) => {
        console.log(e)
        const selectedGreased = e.target.value
        setGreased(selectedGreased === "greased")
        handleFilterChange(selectedGreased === "greased")
    }
    
    return (
        <div>
            <label>
                <select value={greased ? "greased" : ""} onChange={handleGreasedFilter}>
                    <option value="">All</option>
                    <option value="greased">Greased</option>
                </select>
            </label>
        </div>
    )
}

export default FilterHogs