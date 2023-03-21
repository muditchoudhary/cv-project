import React from "react";
import "../Styles/personalDetails.css";
import SocialsPopup from "./SocialsPopup";

const PersonalDetails = (props) => {
	return (
		<div className="personal-details">
			<h2>Personal Details</h2>
			<hr />
			<div className="input-form">
				<div className="top">
					<div>
						<label htmlFor="name">Full Name</label>
						<input
							type="text"
							id="name"
							name="name"
							value={props.details.name}
							onChange={(e) => {
								props.handleNameChange(
									props.details,
									e.target.value,
									props.setPersonalDetials
								);
							}}
							required
						/>
					</div>
					<div>
						<label htmlFor="location">Location</label>
						<input
							type="text"
							id="location"
							name="location"
							value={props.details.location}
							onChange={(e) => {
								props.handleLocationChange(
									props.details,
									e.target.value,
									props.setPersonalDetials
								);
							}}
							required
						/>
					</div>
				</div>
				<div className="bottom">
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={props.details.mail}
							onChange={(e) => {
								props.handleMailChange(
									props.details,
									e.target.value,
									props.setPersonalDetials
								);
							}}
							required
						/>
					</div>
					<div>
						<label htmlFor="phone">Phone Number</label>
						<input
							type="number"
							id="phone"
							name="phone"
							value={props.details.phone}
							onChange={(e) => {
								props.handlePhoneChange(
									props.details,
									e.target.value,
									props.setPersonalDetials
								);
							}}
							required
						/>
					</div>
				</div>
				<a href="#socials-popup" className="button">
					Add Socials
				</a>
				<SocialsPopup
					socials={props.details.socials}
					changeGitHub={(e) => {
						props.handleGithubChange(
							props.details,
							e.target.value,
							props.setPersonalDetials
						);
					}}
					changeLinkedIn={(e) => {
						props.handleLinkedinChange(
							props.details,
							e.target.value,
							props.setPersonalDetials
						);
					}}
				/>
			</div>
		</div>
	);
};

export default PersonalDetails;
