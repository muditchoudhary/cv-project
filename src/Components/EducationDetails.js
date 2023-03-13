import React from "react";
import EducationInputForm from "./EducationInputForm";
/**
 * The data is flowing from the parent to the child
 * component. i.e From App.js --> EducationDetails.js --> EducationInputFrom.js
 * Using array of objects to store data of education details.
 * EducationDetails.js gets the array as prop, map over each obj
 * inside it and pass the obj to EducationInputForm.js in detail prop.
 * 
 * For the handles. Handles are created in a different files.
 * But are imported into App.js from there they passed to
 * EducationDetails component as a prop. They also get bind with
 * App.js this. EducationDetails.js again passes the handle
 * to EducationInputFrom.js as a prop.
 */
class EducationDetails extends React.Component {
	render() {
		return (
			<div className="education-details">
				<h2>Education</h2>
				<hr />
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
						/>
					);
				})}
			</div>
		);
	}
}

export default EducationDetails;
