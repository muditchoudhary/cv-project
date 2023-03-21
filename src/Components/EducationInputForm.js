import React from "react";

const EducationInputForm = (props) => {
	return (
		<div className="input-form" id={props.detail.uniqueId}>
			<div className="top">
				<div>
					<label htmlFor="school-name">School Name</label>
					<input
						type="text"
						id="school-name"
						name="school-name"
						value={props.detail.schoolName}
						onChange={(e) => {
							props.handleSchoolNameChange(
								props.prevState,
								e.target.value,
								props.detail.uniqueId,
								props.setEducationDetials
							);
						}}
						required
					/>
				</div>
				<div>
					<label htmlFor="school-location">School Location</label>
					<input
						type="text"
						id="school-location"
						name="school-location"
						value={props.detail.schoolLocation}
						onChange={(e) => {
							props.handleSchoolLocationChange(
								props.prevState,
								e.target.value,
								props.detail.uniqueId,
								props.setEducationDetials
							);
						}}
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
						value={props.detail.courseName}
						onChange={(e) => {
							props.handleCourseNameChange(
								props.prevState,
								e.target.value,
								props.detail.uniqueId,
								props.setEducationDetials
							);
						}}
						required
					/>
				</div>
				<div>
					<label htmlFor="school-start">School Joining Date</label>
					<input
						type="date"
						id="school-start"
						name="school-start"
						value={props.detail.courseStart}
						onChange={(e) => {
							props.handleCourseStartChange(
								props.prevState,
								e.target.value,
								props.detail.uniqueId,
								props.setEducationDetials
							);
						}}
						required
					/>
				</div>
				<div>
					<label htmlFor="school-end">School End Date</label>
					<input
						type="date"
						id="school-end"
						name="school-end"
						value={props.detail.courseEnd}
						onChange={(e) => {
							props.handleCourseEndChange(
								props.prevState,
								e.target.value,
								props.detail.uniqueId,
								props.setEducationDetials
							);
						}}
						required
					/>
				</div>
			</div>
			<div className="bottom">
				<button
					type="button"
					onClick={() => {
						props.removeEducation(
							props.prevState,
							props.detail.uniqueId,
							props.setEducationDetials
						);
					}}
				>
					Remove
				</button>
			</div>
		</div>
	);
};

export default EducationInputForm;
