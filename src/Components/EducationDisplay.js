import React from "react";

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
							{this.fomratDate(
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

	fomratDate(startDate, endDate) {
		const months = {
			"01": "January",
			"02": "February",
			"03": "March",
			"04": "April",
			"05": "May",
			"06": "June",
			"07": "July",
			"08": "August",
			"09": "September",
			"10": "October",
			"11": "November",
			"12": "December",
		};

		let startYearVal = startDate.split("-")[0];
		let startMonthVal = startDate.split("-")[1];
		let startMonthName = months[startMonthVal];
		startMonthName = startMonthName.slice(0, 3) + ".";

		let endYearVal = endDate.split("-")[0];
		let endMonthVal = endDate.split("-")[1];
		let endMonthName = months[endMonthVal];
		endMonthName = endMonthName.slice(0, 3) + ".";

		return (
			startMonthName +
			" " +
			startYearVal +
			" - " +
			endMonthName +
			" " +
			endYearVal
		);
	}
}

export default EducationDisplay;
