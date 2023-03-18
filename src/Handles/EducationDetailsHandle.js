import { v4 as uuidv4 } from "uuid";
import { initialData } from "../Other/utilities";

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

function addNewEducation() {
	let newEducation = { ...initialData.details.education[0] };
	newEducation.uniqueId = uuidv4();

	this.setState((prevState) => ({
		details: {
			...prevState.details,
			education: [...prevState.details.education, newEducation],
		},
	}));
}

function removeEducation(e) {
	let uniqueId = e.target.parentElement;
	uniqueId = uniqueId.parentElement;
	uniqueId = uniqueId.id;

	this.setState((prevState) => ({
		details: {
			...prevState.details,
			education: prevState.details.education.filter((obj) => {
				return obj.uniqueId !== uniqueId;
			}),
		},
	}));
}

export {
	changeSchoolName,
	changeSchoolLocation,
	changeCourseName,
	changeCourseStart,
	changeCourseEnd,
	addNewEducation,
	removeEducation,
};
