import React, { useState } from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import FilterHogs from "./FilterHogs";
import SortHogs from "./SortHogs";

import hogs from "../porkers_data";

function App() {
	const [filteredHogs, setFilteredHogs] = useState(hogs)
	
	const handleFilterChange = (greasedOnly) => {
		console.log("Filter option greasedOnly")
		if (greasedOnly) {
			const filtered = hogs.filter((hog) => hog.greased)
			console.log("Filtered hogs:", filtered)
			setFilteredHogs(filtered)
		} else {
			console.log("Unfiltered hogs:", hogs)
			setFilteredHogs(hogs)
		}
	}

	const handleSorting = (sortingPreference) => {
		let sorted;
		if (sortingPreference === "name") {
			sorted = [...filteredHogs].sort((a, b) => a.localeCompare(b.name))
		} else if (sortingPreference === "weight") {
			sorted = [...filteredHogs].sort((a, b) => a.weight - b.weight)
		}
		setFilteredHogs(sorted)
	}

	return (
		<div className="App">
			<Nav />
			<FilterHogs handleFilterChange={handleFilterChange}/>
			<SortHogs handleSorting={handleSorting}/>
			<HogTiles hogs={filteredHogs}/>
		</div>
	);
}

export default App;
