import React from "react";

class EducationInputForm extends React.Component {
	render() {
		return (
			<div className="input-form" id={this.props.detail.uniqueId}>
				<div className="top">
					<input
						type="text"
						id="school-name"
						name="school-name"
						value={this.props.detail.schoolName}
                        onChange={this.props.changeSchoolName}
						required
					/>

					<input
						type="text"
						id="school-location"
						name="school-location"
						value={this.props.detail.schoolLocation}
                        onChange={this.props.changeSchoolLocation}
						required
					/>
				</div>
				<div className="mid">
					<input
						type="text"
						id="course"
						name="course"
						value={this.props.detail.courseName}
                        onChange={this.props.changeCourseName}
						required
					/>

					<input
						type="date"
						id="school-start"
						name="school-start"
						value={this.props.detail.courseStart}
                        onChange={this.props.changeCourseStart}
						required
					/>
				</div>
				<div className="bottom">
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
		);
	}
}

export default EducationInputForm;
