import React from "react";

class ExperienceInputForm extends React.Component {
	render() {
		return (
			<div className="input-form" id={this.props.detail.uniqueId}>
				<div className="top">
					<div>
						<label htmlFor="position">Job Position</label>
						<input
							type="text"
							id="position"
							name="position"
							value={this.props.detail.position}
							onChange={this.props.changePosition}
							required
						/>
					</div>
					<div>
						<label htmlFor="company-name">Company Name</label>
						<input
							type="text"
							id="company-name"
							name="company-name"
							value={this.props.detail.companyName}
							onChange={this.props.changeCompanyName}
							required
						/>
					</div>
				</div>
				<div className="mid">
					<div>
						<label htmlFor="company-location">
							Company Location
						</label>
						<input
							type="text"
							id="company-location"
							name="company-location"
							value={this.props.detail.jobLocation}
							onChange={this.props.changeJobLocation}
							required
						/>
					</div>
					<div>
						<label htmlFor="job-start">Job Start Date</label>
						<input
							type="date"
							id="job-start"
							name="job-start"
							value={this.props.detail.jobStart}
							onChange={this.props.changeJobStart}
							required
						/>
					</div>
					<div>
						<label htmlFor="job-end">Job End Date</label>
						<input
							type="date"
							id="job-end"
							name="job-end"
							value={this.props.detail.jobEnd}
							onChange={this.props.changeJobEnd}
							required
						/>
					</div>
				</div>
				<div className="bottom">
					<div>
						<label htmlFor="job-description">Job Description</label>
						<textarea
							id="job-description"
							name="job-description"
							rows="8"
							cols="33"
							value={this.props.detail.jobDescription}
							onChange={this.props.changeJobDescription}
						></textarea>
					</div>
				</div>
			</div>
		);
	}
}

export default ExperienceInputForm;
