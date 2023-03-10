import React from "react";

class ExperienceDetails extends React.Component {
	render() {
		return (
			<div className="experience-details">
				<h2>Education</h2>
				<hr />
				<div className="input-form">
					<div className="top">
						<input
							type="text"
							id="position"
							name="position"
							value={this.props.detail.position}
							required
						/>
						<input
							type="date"
							id="job-start"
							name="job-start"
							value={this.props.detail.jobStart}
							required
						/>
					</div>
					<div className="mid">
						<input
							type="text"
							id="company-name"
							name="company-name"
							value={this.props.detail.companyName}
							required
						/>
						<input
							type="date"
							id="job-end"
							name="job-end"
							value={this.props.detail.jobEnd}
							required
						/>
					</div>
					<div className="bottom">
						<input
							type="text"
							id="company-location"
							name="company-location"
							value={this.props.detail.jobLocation}
							required
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ExperienceDetails;
