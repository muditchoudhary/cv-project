import React from "react";
import EducationInputForm from "./EducationInputForm";
import "../Styles/educationDetails.css";
class EducationDetails extends React.Component {
	render() {
		return (
			<div className="education-details">
				<h2>Education</h2>
				<hr />
                <button type="button" onClick={this.props.addNewEducation}>Add</button>
				{this.props.details.map((detail) => {
					return (
						<EducationInputForm
							detail={detail}
							key={detail.uniqueId}
							changeSchoolName={this.props.changeSchoolName}
                            changeSchoolLocation={this.props.changeSchoolLocation}
                            changeCourseName={this.props.changeCourseName}
                            changeCourseStart={this.props.changeCourseStart}
                            changeCourseEnd={this.props.changeCourseEnd}
                            removeEducation={this.props.removeEducation}
						/>
					);
				})}
			</div>
		);
	}
}

export default EducationDetails;
