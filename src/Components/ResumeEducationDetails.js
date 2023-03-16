import React from "react";
import EducationDisplay from "./EducationDisplay";
import "../Styles/resumeEducation.css";

class ResumeEducationDetails extends React.Component {
	render() {
		return (
			<div className="resume-education">
				<h2>Education</h2>
				<hr />
				{this.props.details.map((detail) => {
					return <EducationDisplay detail={detail} />;
				})}
			</div>
		);
	}
}

export default ResumeEducationDetails;
