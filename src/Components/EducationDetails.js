import React from "react";
import EducationInputForm from "./EducationInputForm";
import "../Styles/educationDetails.css";

const EducationDetails = (props) => {
	return (
		<div className="education-details">
			<h2>Education</h2>
			<hr />
			<button
				type="button"
				onClick={() => {
					props.addNewEducation(
						props.prevState,
						props.setEducationDetials
					);
				}}
			>
				Add
			</button>
			{props.details.map((detail) => {
				return (
					<EducationInputForm
						detail={detail}
						key={detail.uniqueId}
						handleSchoolNameChange={props.handleSchoolNameChange}
						handleSchoolLocationChange={props.handleSchoolLocationChange}
						handleCourseNameChange={props.handleCourseNameChange}
						handleCourseStartChange={props.handleCourseStartChange}
						handleCourseEndChange={props.handleCourseEndChange}
						removeEducation={props.removeEducation}
						setEducationDetials={props.setEducationDetials}
						prevState={props.prevState}
					/>
				);
			})}
		</div>
	);
};

export default EducationDetails;
