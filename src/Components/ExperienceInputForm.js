import React from "react";

const ExperienceInputForm = (props) => {
	return (
		<div className="input-form" id={props.detail.uniqueId}>
			<div className="top">
				<div>
					<label htmlFor="position">Job Position</label>
					<input
						type="text"
						id="position"
						name="position"
						value={props.detail.position}
						onChange={props.changePosition}
						required
					/>
				</div>
				<div>
					<label htmlFor="company-name">Company Name</label>
					<input
						type="text"
						id="company-name"
						name="company-name"
						value={props.detail.companyName}
						onChange={props.changeCompanyName}
						required
					/>
				</div>
			</div>
			<div className="mid">
				<div>
					<label htmlFor="company-location">Company Location</label>
					<input
						type="text"
						id="company-location"
						name="company-location"
						value={props.detail.jobLocation}
						onChange={props.changeJobLocation}
						required
					/>
				</div>
				<div>
					<label htmlFor="job-start">Job Start Date</label>
					<input
						type="date"
						id="job-start"
						name="job-start"
						value={props.detail.jobStart}
						onChange={props.changeJobStart}
						required
					/>
				</div>
				<div>
					<label htmlFor="job-end">Job End Date</label>
					<input
						type="date"
						id="job-end"
						name="job-end"
						value={props.detail.jobEnd}
						onChange={props.changeJobEnd}
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
						value={props.detail.jobDescription}
						onChange={props.changeJobDescription}
					></textarea>
				</div>
				<button type="button" onClick={props.removeExperience}>
					Remove
				</button>
			</div>
		</div>
	);
};

export default ExperienceInputForm;
