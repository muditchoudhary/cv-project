import React from "react";
import telephone from "../Assets/Icons/telephone.svg";
import email from "../Assets/Icons/email.svg";
import linkedin from "../Assets/Icons/linkedin.svg";
import github from "../Assets/Icons/github.svg";
import "../Styles/resumePersonalDetails.css";

const ResumePersonalDetails = (props) => {
	return (
		<div className="resume-personal-details">
			<h1>{props.details.name}</h1>
			<div className="contact-details-container">
				<div className="cd-sub-container">
					<img src={telephone} alt="Telephone" />
					<span>{props.details.phone}</span>
				</div>
				<div className="cd-sub-container">
					<img src={email} alt="Email" />
					<span>{props.details.mail}</span>
				</div>
				<div className="cd-sub-container">
					<img src={linkedin} alt="Linkedin" />
					<a href={props.details.socials.linkedin.link}>
						{props.details.socials.linkedin.name}
					</a>
				</div>
				<div className="cd-sub-container">
					<img src={github} alt="Github" />
					<a href={props.details.socials.github.link}>
						{props.details.socials.github.name}
					</a>
				</div>
			</div>
		</div>
	);
};

export default ResumePersonalDetails;
