import React from "react";
import EducationDisplay from "./EducationDisplay";
import "../Styles/resumeEducation.css";

const ResumeEducationDetails = (props) => {
	return (
		<div className="resume-education">
			<h2>Education</h2>
			<hr />
			{props.details.map((detail) => {
				return (
					<EducationDisplay detail={detail} key={detail.uniqueId} />
				);
			})}
		</div>
	);
};

export default ResumeEducationDetails;
