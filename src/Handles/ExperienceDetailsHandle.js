import { v4 as uuidv4 } from "uuid";
import { details as initialData } from "../Other/utilities";

function handleJobPositionChange(
	prevState,
	nextValue,
	parentUniqueId,
	setExperienceDetials
) {
	setExperienceDetials(
		prevState.map((obj) => {
			return obj.uniqueId === parentUniqueId
				? { ...obj, position: nextValue }
				: obj;
		})
	);
}

function handleJobStartChange(
	prevState,
	nextValue,
	parentUniqueId,
	setExperienceDetials
) {
	setExperienceDetials(
		prevState.map((obj) => {
			return obj.uniqueId === parentUniqueId
				? { ...obj, jobStart: nextValue }
				: obj;
		})
	);
}

function handleCompanyNameChange(
	prevState,
	nextValue,
	parentUniqueId,
	setExperienceDetials
) {
	setExperienceDetials(
		prevState.map((obj) => {
			return obj.uniqueId === parentUniqueId
				? { ...obj, companyName: nextValue }
				: obj;
		})
	);
}

function handleJobEndChange(
	prevState,
	nextValue,
	parentUniqueId,
	setExperienceDetials
) {
	setExperienceDetials(
		prevState.map((obj) => {
			return obj.uniqueId === parentUniqueId
				? { ...obj, jobEnd: nextValue }
				: obj;
		})
	);
}

function handleJobLocationChange(
	prevState,
	nextValue,
	parentUniqueId,
	setExperienceDetials
) {
	setExperienceDetials(
		prevState.map((obj) => {
			return obj.uniqueId === parentUniqueId
				? { ...obj, jobLocation: nextValue }
				: obj;
		})
	);
}

function handleJobDescriptionChange(
	prevState,
	nextValue,
	parentUniqueId,
	setExperienceDetials
) {
	setExperienceDetials(
		prevState.map((obj) => {
			return obj.uniqueId === parentUniqueId
				? { ...obj, jobDescription: nextValue }
				: obj;
		})
	);
}

function addNewExperience(prevState, setExperienceDetials) {
	let newExperience = { ...initialData.experience[0] };
	newExperience.uniqueId = uuidv4();

	setExperienceDetials([...prevState, newExperience]);
}

function removeExperience(prevState, parentUniqueId, setExperienceDetials) {
	setExperienceDetials(
		prevState.filter((obj) => obj.uniqueId !== parentUniqueId)
	);
}

export {
	handleJobPositionChange,
	handleJobStartChange,
	handleCompanyNameChange,
	handleJobEndChange,
	handleJobLocationChange,
	handleJobDescriptionChange,
	addNewExperience,
	removeExperience,
};
