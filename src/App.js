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
} from "./Handles/EducationDetailsHandle";
import {
	changePosition,
	changeJobStart,
	changeCompanyName,
	changeJobEnd,
	changeJobLocation,
} from "./Handles/ExperienceDetailsHandle";
import "./Styles/app.css";

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

		this.state = {
			details: {
				personalDetails: {
					name: "Kunal Sekhawat",
					location: "Delhi India",
					mail: "kunal@gamil.com",
					phone: "91888899990",
					socials: {
						github: {
							name: "GitHub",
							link: "https://github.com/kunalsekhawat",
						},
						linkedin: {
							name: "LinkedIn",
							link: "https://www.linkedin.com/in/kunal-sekhawat",
						},
					},
				},
				education: [
					{
						schoolName: "IIM Ahemdabad",
						schoolLocation: "Ahemdabad, India",
						courseName: "MBA in Finance",
						courseStart: "2015-09-01",
						courseEnd: "2018-09-01",
						uniqueId: uuidv4(),
					},
				],

				experience: [
					{
						position: "Product Manager",
						jobStart: "2018-12-01",
						companyName: "XYZ",
						jobEnd: "2019-09-01",
						jobLocation: "Banglore, India",
						uniqueId: uuidv4(),
					},
				],
			},
		};
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
					/>
					<ExperienceDetails
						details={this.state.details.experience}
						changePosition={changePosition.bind(this)}
						changeJobStart={changeJobStart.bind(this)}
						changeCompanyName={changeCompanyName.bind(this)}
						changeJobEnd={changeJobEnd.bind(this)}
						changeJobLocation={changeJobLocation.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

export default App;
