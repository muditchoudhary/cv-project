import { v4 as uuidv4 } from "uuid";
import { details as initialData } from "../Other/utilities";

function handleSchoolNameChange(
	prevState,
	nextValue,
	parentUniqueId,
	setExperienceDetials
) {
	setExperienceDetials(
		prevState.map((obj) => {
			return obj.uniqueId === parentUniqueId
				? { ...obj, schoolName: nextValue }
				: obj;
		})
	);
}

function handleSchoolLocationChange(
	prevState,
	nextValue,
	parentUniqueId,
	setEducationDetials
) {
	setEducationDetials(
		prevState.map((obj) => {
			return obj.uniqueId === parentUniqueId
				? { ...obj, schoolLocation: nextValue }
				: obj;
		})
	);
}

function handleCourseNameChange(
	prevState,
	nextValue,
	parentUniqueId,
	setEducationDetials
) {
	setEducationDetials(
		prevState.map((obj) => {
			return obj.uniqueId === parentUniqueId
				? { ...obj, courseName: nextValue }
				: obj;
		})
	);
}

function handleCourseStartChange(
	prevState,
	nextValue,
	parentUniqueId,
	setEducationDetials
) {
	setEducationDetials(
		prevState.map((obj) => {
			return obj.uniqueId === parentUniqueId
				? { ...obj, courseStart: nextValue }
				: obj;
		})
	);
}

function handleCourseEndChange(
	prevState,
	nextValue,
	parentUniqueId,
	setEducationDetials
) {
	setEducationDetials(
		prevState.map((obj) => {
			return obj.uniqueId === parentUniqueId
				? { ...obj, courseEnd: nextValue }
				: obj;
		})
	);
}

function addNewEducation(prevState, setEducationDetials) {
	let newEducation = { ...initialData.education[0] };
	newEducation.uniqueId = uuidv4();

	setEducationDetials([...prevState, newEducation]);
}

function removeEducation(prevState, parentUniqueId, setEducationDetials) {
	setEducationDetials(
		prevState.filter((obj) => obj.uniqueId !== parentUniqueId)
	);
}

export {
	handleSchoolNameChange,
	handleSchoolLocationChange,
	handleCourseNameChange,
	handleCourseStartChange,
	handleCourseEndChange,
	addNewEducation,
	removeEducation,
};
