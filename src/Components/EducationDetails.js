import React from "react";
import EducationInputForm from "./EducationInputForm";
import "../Styles/educationDetails.css";

const EducationDetails = (props) => {
	return (
		<div className="education-details">
			<h2>Education</h2>
			<hr />
			<button type="button" onClick={props.addNewEducation}>
				Add
			</button>
			{props.details.map((detail) => {
				return (
					<EducationInputForm
						detail={detail}
						key={detail.uniqueId}
						changeSchoolName={props.changeSchoolName}
						changeSchoolLocation={props.changeSchoolLocation}
						changeCourseName={props.changeCourseName}
						changeCourseStart={props.changeCourseStart}
						changeCourseEnd={props.changeCourseEnd}
						removeEducation={props.removeEducation}
					/>
				);
			})}
		</div>
	);
};

export default EducationDetails;
