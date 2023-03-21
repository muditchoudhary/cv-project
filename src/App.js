import React, { useState } from "react";
import EducationDetails from "./Components/EducationDetails";
import ExperienceDetails from "./Components/ExperienceDetails";
import PersonalDetails from "./Components/PersonalDetails";
import {
	handleNameChange,
	handleLocationChange,
	handleMailChange,
	handlePhoneChange,
	handleGithubChange,
	handleLinkedinChange,
} from "./Handles/PersonalDetailsHandles";
import {
	handleSchoolNameChange,
	handleSchoolLocationChange,
	handleCourseNameChange,
	handleCourseStartChange,
	handleCourseEndChange,
	addNewEducation,
	removeEducation,
} from "./Handles/EducationDetailsHandle";
import {
	handleJobPositionChange,
	handleJobStartChange,
	handleCompanyNameChange,
	handleJobEndChange,
	handleJobLocationChange,
	handleJobDescriptionChange,
	addNewExperience,
	removeExperience,
} from "./Handles/ExperienceDetailsHandle";

import "./Styles/app.css";
import ResumePersonalDetails from "./Components/ResumePersonalDetails";
import ResumeEducationDetails from "./Components/ResumeEducationDetails";
import ResumeExperienceDetails from "./Components/ResumeExperienceDetails";
import { details as initialData } from "./Other/utilities";

/**
 * The data is flowing from the parent to the child
 * component. i.e From App.js --> EducationDetails.js --> EducationInputFrom.js
 * Using array of objects to store data of education details.
 * EducationDetails.js gets the array as prop, map over each obj
 * inside it and pass the obj to EducationInputForm.js in detail prop.
 *
 * For the handles. Handles are created in a different files.
 * But are imported into App.js from there they passed to
 * EducationDetails component as a prop. They also get bind with
 * App.js this. EducationDetails.js again passes the handle
 * to EducationInputFrom.js as a prop.
 *
 * Same for the Experience Component.
 */

const App = () => {
	const [personalDetails, setPersonalDetials] = useState(
		initialData.personalDetails
	);
	const [educationDetails, setEducationDetials] = useState(
		initialData.education
	);
	const [experienceDetails, setExperienceDetials] = useState(
		initialData.experience
	);

	return (
		<div className="app">
			<h1>Resume Generator</h1>
			<div className="form-container">
				<PersonalDetails
					details={personalDetails}
					handleNameChange={handleNameChange}
					handleLocationChange={handleLocationChange}
					handleMailChange={handleMailChange}
					handlePhoneChange={handlePhoneChange}
					handleGithubChange={handleGithubChange}
					handleLinkedinChange={handleLinkedinChange}
					setPersonalDetials={setPersonalDetials}
				/>
				<EducationDetails
					details={educationDetails}
					handleSchoolNameChange={handleSchoolNameChange}
					handleSchoolLocationChange={handleSchoolLocationChange}
					handleCourseNameChange={handleCourseNameChange}
					handleCourseStartChange={handleCourseStartChange}
					handleCourseEndChange={handleCourseEndChange}
					addNewEducation={addNewEducation}
					removeEducation={removeEducation}
					setEducationDetials={setEducationDetials}
					prevState={educationDetails}
				/>
				<ExperienceDetails
					details={experienceDetails}
					handleJobPositionChange={handleJobPositionChange}
					handleJobStartChange={handleJobStartChange}
					handleCompanyNameChange={handleCompanyNameChange}
					handleJobEndChange={handleJobEndChange}
					handleJobLocationChange={handleJobLocationChange}
					handleJobDescriptionChange={handleJobDescriptionChange}
					addNewExperience={addNewExperience}
					removeExperience={removeExperience}
                    prevState={experienceDetails}
                    setExperienceDetials={setExperienceDetials}
				/>
			</div>
			<div className="resume-container">
				<ResumePersonalDetails details={personalDetails} />
				<ResumeEducationDetails details={educationDetails} />
				<ResumeExperienceDetails
					details={experienceDetails}
				/>
			</div>
		</div>
	);
};

export default App;
