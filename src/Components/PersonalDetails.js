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
							onChange={props.changeName}
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
							onChange={props.changeLocation}
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
							onChange={props.changeMail}
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
							onChange={props.changePhone}
							required
						/>
					</div>
				</div>
				<a href="#socials-popup" className="button">
					Add Socials
				</a>
				<SocialsPopup
					socials={props.details.socials}
					changeGitHub={props.changeGitHub}
					changeLinkedIn={props.changeLinkedIn}
				/>
			</div>
		</div>
	);
};

export default PersonalDetails;
