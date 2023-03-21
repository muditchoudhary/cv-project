import React from "react";
import ExperienceInputForm from "./ExperienceInputForm";
import "../Styles/experienceDetails.css";

const ExperienceDetails = (props) => {
	return (
		<div className="experience-details">
			<h2>Experience</h2>
			<hr />
			<button
				type="button"
				onClick={() => {
					props.addNewExperience(
						props.prevState,
						props.setExperienceDetials
					);
				}}
			>
				Add
			</button>
			{props.details.map((detail) => {
				return (
					<ExperienceInputForm
						detail={detail}
						key={detail.uniqueId}
						handleJobPositionChange={props.handleJobPositionChange}
						handleJobStartChange={props.handleJobStartChange}
						handleCompanyNameChange={props.handleCompanyNameChange}
						handleJobEndChange={props.handleJobEndChange}
						handleJobLocationChange={props.handleJobLocationChange}
						handleJobDescriptionChange={
							props.handleJobDescriptionChange
						}
						removeExperience={props.removeExperience}
						prevState={props.prevState}
						setExperienceDetials={props.setExperienceDetials}
					/>
				);
			})}
		</div>
	);
};

export default ExperienceDetails;
