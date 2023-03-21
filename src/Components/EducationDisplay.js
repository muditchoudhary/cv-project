import React from "react";
import { fomratDate } from "../Other/utilities";

const EducationDisplay = (props) => {
	return (
		<div className="edu-container">
			<div className="edu-sub-container">
				<div>
					<h4>{props.detail.schoolName}</h4>
					<p>{props.detail.courseName}</p>
				</div>
				<div>
					<h4>
						{fomratDate(
							props.detail.courseStart,
							props.detail.courseEnd
						)}
					</h4>
					<p>{props.detail.schoolLocation}</p>
				</div>
			</div>
		</div>
	);
};

export default EducationDisplay;
