import React from "react";
import ExperienceInputForm from "./ExperienceInputForm";
import "../Styles/experienceDetails.css";

const ExperienceDetails = (props) => {
	return (
		<div className="experience-details">
			<h2>Experience</h2>
			<hr />
			<button type="button" onClick={props.addNewExperience}>
				Add
			</button>
			{props.details.map((detail) => {
				return (
					<ExperienceInputForm
						detail={detail}
						key={detail.uniqueId}
						changePosition={props.changePosition}
						changeJobStart={props.changeJobStart}
						changeCompanyName={props.changeCompanyName}
						changeJobEnd={props.changeJobEnd}
						changeJobLocation={props.changeJobLocation}
						changeJobDescription={props.changeJobDescription}
						removeExperience={props.removeExperience}
					/>
				);
			})}
		</div>
	);
};

export default ExperienceDetails;
