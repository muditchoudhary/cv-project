import React from "react";
import ExperienceInputForm from "./ExperienceInputForm";
import "../Styles/experienceDetails.css";

class ExperienceDetails extends React.Component {
	render() {
		return (
			<div className="experience-details">
				<h2>Experience</h2>
				<hr />
                <button type="button" onClick={this.props.addNewExperience}>Add</button>
				{this.props.details.map((detail) => {
					return (
						<ExperienceInputForm
							detail={detail}
							key={detail.uniqueId}
							changePosition={this.props.changePosition}
							changeJobStart={this.props.changeJobStart}
							changeCompanyName={this.props.changeCompanyName}
							changeJobEnd={this.props.changeJobEnd}
							changeJobLocation={this.props.changeJobLocation}
                            changeJobDescription={this.props.changeJobDescription}
                            removeExperience={this.props.removeExperience}
						/>
					);
				})}
			</div>
		);
	}
}

export default ExperienceDetails;
