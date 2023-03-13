import React from "react";
import ExperienceInputForm from "./ExperienceInputForm";

class ExperienceDetails extends React.Component {
	render() {
		return (
			<div className="experience-details">
				<h2>Experience</h2>
				<hr />
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
						/>
					);
				})}
			</div>
		);
	}
}

export default ExperienceDetails;
