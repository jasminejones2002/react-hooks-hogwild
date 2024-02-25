import React, {useState} from "react";
import hogs from "../porkers_data";

function SortHogs({ handleSorting }) {
    const [sortingPreference, setSortingPreference] = useState("name")

    const handleSortingChange = (e) => {
        setSortingPreference(e.target.value)
        handleSorting(e.target.value)
    }

    return (
        <div>
            <label>Sort By:</label>
            <select value={sortingPreference} onChange={handleSortingChange}>
                <option value={hogs.name}>Name</option>
                <option value={hogs.weight}>Weight</option>
            </select>
        </div>
    )
}

export default SortHogs