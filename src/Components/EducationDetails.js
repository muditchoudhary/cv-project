import React from "react";

class EducationDetails extends React.Component {
	render() {
		return (
			<div className="education-details">
				<h2>Education</h2>
				<hr />
				<div className="input-form">
					<div className="top">
						<input
							type="text"
							id="school-name"
							name="school-name"
							value={this.props.detail.schoolName}
							required
						/>

						<input
							type="text"
							id="school-location"
							name="school-location"
							value={this.props.detail.schoolLocation}
							required
						/>
					</div>
					<div className="mid">
						<input
							type="text"
							id="course"
							name="course"
							value={this.props.detail.courseName}
							required
						/>

						<input
							type="date"
							id="school-start"
							name="school-start"
							value={this.props.detail.courseStart}
							required
						/>
					</div>
					<div className="bottom">
						<input
							type="date"
							id="school-end"
							name="school-end"
							value={this.props.detail.courseEnd}
							required
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default EducationDetails;
