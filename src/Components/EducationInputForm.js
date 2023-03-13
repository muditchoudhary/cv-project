import React from "react";

class EducationInputForm extends React.Component {
	render() {
		return (
			<div className="input-form" id={this.props.detail.uniqueId}>
				<div className="top">
					<div>
						<label htmlFor="school-name">School Name</label>
						<input
							type="text"
							id="school-name"
							name="school-name"
							value={this.props.detail.schoolName}
							onChange={this.props.changeSchoolName}
							required
						/>
					</div>
					<div>
						<label htmlFor="school-location">School Location</label>
						<input
							type="text"
							id="school-location"
							name="school-location"
							value={this.props.detail.schoolLocation}
							onChange={this.props.changeSchoolLocation}
							required
						/>
					</div>
				</div>
				<div className="mid">
					<div>
						<label htmlFor="course">course Name</label>
						<input
							type="text"
							id="course"
							name="course"
							value={this.props.detail.courseName}
							onChange={this.props.changeCourseName}
							required
						/>
					</div>
					<div>
						<label htmlFor="school-start">
							School Joining Date
						</label>
						<input
							type="date"
							id="school-start"
							name="school-start"
							value={this.props.detail.courseStart}
							onChange={this.props.changeCourseStart}
							required
						/>
					</div>
                    <div>
						<label htmlFor="school-end">School End Date</label>
						<input
							type="date"
							id="school-end"
							name="school-end"
							value={this.props.detail.courseEnd}
							onChange={this.props.changeCourseEnd}
							required
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default EducationInputForm;
