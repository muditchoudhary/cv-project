function changeSchoolName(e) {
	// First get the parent of the input field
	// but not the parent which has the unique ID
	let uniqueId = e.target.parentElement;
	uniqueId = uniqueId.parentElement;
	uniqueId = uniqueId.parentElement.id;

	this.setState((prevState) => ({
		details: {
			...prevState.details,
			education: prevState.details.education.map((obj) =>
				obj.uniqueId === uniqueId
					? { ...obj, schoolName: e.target.value }
					: obj
			),
		},
	}));
}

function changeSchoolLocation(e) {
	// First get the parent of the input field
	// but not the parent which has the unique ID
	let uniqueId = e.target.parentElement;
	uniqueId = uniqueId.parentElement;
	uniqueId = uniqueId.parentElement.id;

	this.setState((prevState) => ({
		details: {
			...prevState.details,
			education: prevState.details.education.map((obj) =>
				obj.uniqueId === uniqueId
					? { ...obj, schoolLocation: e.target.value }
					: obj
			),
		},
	}));
}

function changeCourseName(e) {
	// First get the parent of the input field
	// but not the parent which has the unique ID
	let uniqueId = e.target.parentElement;
	uniqueId = uniqueId.parentElement;
	uniqueId = uniqueId.parentElement.id;

	this.setState((prevState) => ({
		details: {
			...prevState.details,
			education: prevState.details.education.map((obj) =>
				obj.uniqueId === uniqueId
					? { ...obj, courseName: e.target.value }
					: obj
			),
		},
	}));
}

function changeCourseStart(e) {
	// First get the parent of the input field
	// but not the parent which has the unique ID
	let uniqueId = e.target.parentElement;
	uniqueId = uniqueId.parentElement;
	uniqueId = uniqueId.parentElement.id;

	this.setState((prevState) => ({
		details: {
			...prevState.details,
			education: prevState.details.education.map((obj) =>
				obj.uniqueId === uniqueId
					? { ...obj, courseStart: e.target.value }
					: obj
			),
		},
	}));
}

function changeCourseEnd(e) {
	// First get the parent of the input field
	// but not the parent which has the unique ID
	let uniqueId = e.target.parentElement;
	uniqueId = uniqueId.parentElement;
	uniqueId = uniqueId.parentElement.id;

	this.setState((prevState) => ({
		details: {
			...prevState.details,
			education: prevState.details.education.map((obj) =>
				obj.uniqueId === uniqueId
					? { ...obj, courseEnd: e.target.value }
					: obj
			),
		},
	}));
}

export {
	changeSchoolName,
	changeSchoolLocation,
	changeCourseName,
	changeCourseStart,
	changeCourseEnd,
};
