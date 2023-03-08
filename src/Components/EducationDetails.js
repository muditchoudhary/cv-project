import React from "react";
import InputFields from "./InputFields";

class EducationDetails extends React.Component {
	render() {
		return (
			<div className="education-details">
				<h2>Education</h2>
				<hr />
				<div className="input-form">
					<div className="top">
						<InputFields
							type="text"
							id="school-name"
							name="school-name"
							value="XYZ University"
						/>
						<InputFields
							type="text"
							id="school-location"
							name="school-location"
							value="Delhi, India"
						/>
					</div>
					<div className="mid">
						<InputFields
							type="text"
							id="course"
							name="course"
							value="BBA"
						/>
						<InputFields
							type="date"
							id="school-start"
							name="school-start"
							value="2015-09-01"
						/>
					</div>
					<div className="bottom">
						<InputFields
							type="date"
							id="school-end"
							name="school-end"
							value="2018-09-01"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default EducationDetails;
