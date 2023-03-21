import React from "react";
import ExperienceDisplay from "./ExperienceDisplay";
import "../Styles/resumeExperienceDetails.css";

const ResumeExperienceDetails = (props) => {
	return (
		<div className="resume-experience">
			<h2>Experience</h2>
			<hr />
			{props.details.map((detail) => {
				return (
					<ExperienceDisplay detail={detail} key={detail.uniqueId} />
				);
			})}
		</div>
	);
};

export default ResumeExperienceDetails;
