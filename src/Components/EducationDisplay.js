import React from "react";
import { fomratDate } from "../Other/utilities";

class EducationDisplay extends React.Component {
	render() {
		return (
			<div className="edu-container">
				<div className="edu-sub-container">
					<div>
						<h4>{this.props.detail.schoolName}</h4>
						<p>{this.props.detail.courseName}</p>
					</div>
					<div>
						<h4>
							{fomratDate(
								this.props.detail.courseStart,
								this.props.detail.courseEnd
							)}
						</h4>
						<p>{this.props.detail.schoolLocation}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default EducationDisplay;
