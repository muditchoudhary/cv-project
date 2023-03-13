function changePosition(e) {
	// First get the parent of the input field
	// but not the parent which has the unique ID
	let uniqueId = e.target.parentElement;
	uniqueId = uniqueId.parentElement.id;

	this.setState((prevState) => ({
		details: {
			...prevState.details,
			experience: prevState.details.experience.map((obj) =>
				obj.uniqueId === uniqueId
					? { ...obj, position: e.target.value }
					: obj
			),
		},
	}));
}

function changeJobStart(e) {
	// First get the parent of the input field
	// but not the parent which has the unique ID
	let uniqueId = e.target.parentElement;
	uniqueId = uniqueId.parentElement.id;

	this.setState((prevState) => ({
		details: {
			...prevState.details,
			experience: prevState.details.experience.map((obj) =>
				obj.uniqueId === uniqueId
					? { ...obj, jobStart: e.target.value }
					: obj
			),
		},
	}));
}

function changeCompanyName(e) {
	// First get the parent of the input field
	// but not the parent which has the unique ID
	let uniqueId = e.target.parentElement;
	uniqueId = uniqueId.parentElement.id;

	this.setState((prevState) => ({
		details: {
			...prevState.details,
			experience: prevState.details.experience.map((obj) =>
				obj.uniqueId === uniqueId
					? { ...obj, companyName: e.target.value }
					: obj
			),
		},
	}));
}

function changeJobEnd(e) {
	// First get the parent of the input field
	// but not the parent which has the unique ID
	let uniqueId = e.target.parentElement;
	uniqueId = uniqueId.parentElement.id;

	this.setState((prevState) => ({
		details: {
			...prevState.details,
			experience: prevState.details.experience.map((obj) =>
				obj.uniqueId === uniqueId
					? { ...obj, jobEnd: e.target.value }
					: obj
			),
		},
	}));
}

function changeJobLocation(e) {
	// First get the parent of the input field
	// but not the parent which has the unique ID
	let uniqueId = e.target.parentElement;
	uniqueId = uniqueId.parentElement.id;

	this.setState((prevState) => ({
		details: {
			...prevState.details,
			experience: prevState.details.experience.map((obj) =>
				obj.uniqueId === uniqueId
					? { ...obj, jobLocation: e.target.value }
					: obj
			),
		},
	}));
}

export {
	changePosition,
	changeJobStart,
	changeCompanyName,
	changeJobEnd,
	changeJobLocation,
};
