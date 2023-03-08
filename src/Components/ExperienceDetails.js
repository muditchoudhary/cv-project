import React from "react";
import InputFields from "./InputFields";

class ExperienceDetails extends React.Component {
	render() {
		return (
			<div className="experience-details">
				<h2>Education</h2>
				<hr />
				<div className="input-form">
					<div className="top">
						<InputFields
							type="text"
							id="position"
							name="position"
							value="Product Manager"
						/>
						<InputFields
							type="date"
							id="job-start"
							name="job-start"
							value="2018-12-01"
						/>
					</div>
					<div className="mid">
						<InputFields
							type="text"
							id="company-name"
							name="company-name"
							value="XYZ"
						/>
						<InputFields
							type="date"
							id="job-end"
							name="job-end"
							value="2019-09-01"
						/>
					</div>
					<div className="bottom">
						<InputFields
							type="text"
							id="company-location"
							name="company-location"
							value="Banglore, India"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ExperienceDetails;
