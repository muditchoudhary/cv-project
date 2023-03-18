import React from "react";
import EducationDetails from "./Components/EducationDetails";
import ExperienceDetails from "./Components/ExperienceDetails";
import PersonalDetails from "./Components/PersonalDetails";
import { v4 as uuidv4 } from "uuid";
import {
	changeName,
	changeLocation,
	changeMail,
	changePhone,
	changeGitHub,
	changeLinkedIn,
} from "./Handles/PersonalDetailsHandles";
import {
	changeSchoolName,
	changeSchoolLocation,
	changeCourseName,
	changeCourseStart,
	changeCourseEnd,
	addNewEducation,
	removeEducation,
} from "./Handles/EducationDetailsHandle";
import {
	changePosition,
	changeJobStart,
	changeCompanyName,
	changeJobEnd,
	changeJobLocation,
	changeJobDescription,
} from "./Handles/ExperienceDetailsHandle";
import "./Styles/app.css";
import ResumePersonalDetails from "./Components/ResumePersonalDetails";
import ResumeEducationDetails from "./Components/ResumeEducationDetails";
import ResumeExperienceDetails from "./Components/ResumeExperienceDetails";
import { initialData } from "./Other/utilities";

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
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = initialData;
	}
	render() {
		return (
			<div className="app">
				<h1>Resume Generator</h1>
				<div className="form-container">
					<PersonalDetails
						details={this.state.details.personalDetails}
						changeName={changeName.bind(this)}
						changeLocation={changeLocation.bind(this)}
						changeMail={changeMail.bind(this)}
						changePhone={changePhone.bind(this)}
						changeGitHub={changeGitHub.bind(this)}
						changeLinkedIn={changeLinkedIn.bind(this)}
					/>
					<EducationDetails
						details={this.state.details.education}
						changeSchoolName={changeSchoolName.bind(this)}
						changeSchoolLocation={changeSchoolLocation.bind(this)}
						changeCourseName={changeCourseName.bind(this)}
						changeCourseStart={changeCourseStart.bind(this)}
						changeCourseEnd={changeCourseEnd.bind(this)}
						addNewEducation={addNewEducation.bind(this)}
						removeEducation={removeEducation.bind(this)}
					/>
					<ExperienceDetails
						details={this.state.details.experience}
						changePosition={changePosition.bind(this)}
						changeJobStart={changeJobStart.bind(this)}
						changeCompanyName={changeCompanyName.bind(this)}
						changeJobEnd={changeJobEnd.bind(this)}
						changeJobLocation={changeJobLocation.bind(this)}
						changeJobDescription={changeJobDescription.bind(this)}
					/>
				</div>
				<div className="resume-container">
					<ResumePersonalDetails
						details={this.state.details.personalDetails}
					/>
					<ResumeEducationDetails
						details={this.state.details.education}
					/>
					<ResumeExperienceDetails
						details={this.state.details.experience}
					/>
				</div>
			</div>
		);
	}
}

export default App;
