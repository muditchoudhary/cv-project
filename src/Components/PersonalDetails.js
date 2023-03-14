import React from "react";
import "../Styles/personalDetails.css";
import SocialsPopup from "./SocialsPopup";

class PersonalDetails extends React.Component {
	render() {
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
								value={this.props.details.name}
								onChange={this.props.changeName}
								required
							/>
						</div>
						<div>
							<label htmlFor="location">Location</label>
							<input
								type="text"
								id="location"
								name="location"
								value={this.props.details.location}
								onChange={this.props.changeLocation}
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
								value={this.props.details.mail}
								onChange={this.props.changeMail}
								required
							/>
						</div>
						<div>
							<label htmlFor="phone">Phone Number</label>
							<input
								type="number"
								id="phone"
								name="phone"
								value={this.props.details.phone}
								onChange={this.props.changePhone}
								required
							/>
						</div>
					</div>
					<a href="#socials-popup" className="button">
						Add Socials
					</a>
					{/* <button type="button"></button> */}
					<SocialsPopup
						socials={this.props.details.socials}
						changeGitHub={this.props.changeGitHub}
						changeLinkedIn={this.props.changeLinkedIn}
					/>
				</div>
			</div>
		);
	}
}

export default PersonalDetails;
