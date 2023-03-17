import React from "react";
import { fomratDate } from "../Other/utilities";
import { formatDescription } from "../Other/utilities";
import { v4 as uuidv4 } from "uuid";


class ExperienceDisplay extends React.Component {
	render() {
		return (
			<div className="exper-container">
				<div className="exper-sub-container-top">
					<div>
						<h4>{this.props.detail.companyName}</h4>
						<p>{this.props.detail.position}</p>
					</div>
					<div>
						<h4>
							{fomratDate(
								this.props.detail.jobStart,
								this.props.detail.jobEnd
							)}
						</h4>
						<p>{this.props.detail.jobLocation}</p>
					</div>
				</div>
				<div className="exper-sub-container-bottom">
					<ul>
						{formatDescription(this.props.detail.jobDescription).map(
							(description) => {
								return <li key={uuidv4()}>{description}</li>;
							}
						)}
					</ul>
				</div>
			</div>
		);
	}
}



export default ExperienceDisplay;
