import React from "react";

class ExperienceInputForm extends React.Component {
	render() {
		return (
			<div className="input-form" id={this.props.detail.uniqueId}>
				<div className="top">
					<input
						type="text"
						id="position"
						name="position"
						value={this.props.detail.position}
                        onChange={this.props.changePosition}
						required
					/>
					<input
						type="date"
						id="job-start"
						name="job-start"
						value={this.props.detail.jobStart}
                        onChange={this.props.changeJobStart}
						required
					/>
				</div>
				<div className="mid">
					<input
						type="text"
						id="company-name"
						name="company-name"
						value={this.props.detail.companyName}
                        onChange={this.props.changeCompanyName}
						required
					/>
					<input
						type="date"
						id="job-end"
						name="job-end"
						value={this.props.detail.jobEnd}
                        onChange={this.props.changeJobEnd}
						required
					/>
				</div>
				<div className="bottom">
					<input
						type="text"
						id="company-location"
						name="company-location"
						value={this.props.detail.jobLocation}
                        onChange={this.props.changeJobLocation}
						required
					/>
				</div>
			</div>
		);
	}
}

export default ExperienceInputForm
