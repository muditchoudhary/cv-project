import React from "react";
import "../Styles/personalDetails.css";

class PersonalDetails extends React.Component {
	render() {
		return (
			<div className="personal-details">
				<h2>Personal Details</h2>
				<hr />
				<div className="input-form">
					<div className="top">
						<input
							type="text"
							id="name"
							name="name"
							value={this.props.detail.name}
							required
						/>
						<input
							type="text"
							id="location"
							name="location"
							value={this.props.detail.location}
							required
						/>
					</div>
					<div className="bottom">
						<button type="button">Socials</button>
						<input
							type="email"
							id="email"
							name="email"
							value={this.props.detail.mail}
							required
						/>
						<input
							type="number"
							id="phone"
							name="phone"
							value={this.props.detail.phone}
							required
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default PersonalDetails;
