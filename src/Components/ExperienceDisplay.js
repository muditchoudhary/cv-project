import React from "react";
import { fomratDate } from "../Other/utilities";
import { formatDescription } from "../Other/utilities";
import { v4 as uuidv4 } from "uuid";

const ExperienceDisplay = (props) => {
	return (
		<div className="exper-container">
			<div className="exper-sub-container-top">
				<div>
					<h4>{props.detail.companyName}</h4>
					<p>{props.detail.position}</p>
				</div>
				<div>
					<h4>
						{fomratDate(props.detail.jobStart, props.detail.jobEnd)}
					</h4>
					<p>{props.detail.jobLocation}</p>
				</div>
			</div>
			<div className="exper-sub-container-bottom">
				<ul>
					{formatDescription(props.detail.jobDescription).map(
						(description) => {
							return <li key={uuidv4()}>{description}</li>;
						}
					)}
				</ul>
			</div>
		</div>
	);
};

export default ExperienceDisplay;
