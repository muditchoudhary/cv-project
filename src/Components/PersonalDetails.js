import React from "react";
import InputFields from "./InputFields";
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
							onChange={this.props.handles.handleName}
							required
						/>
						<input
							type="text"
							id="location"
							name="location"
							value={this.props.detail.location}
							onChange={this.props.handles.handleName}
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
							onChange={this.props.handles.handleName}
							required
						/>
						<input
							type="number"
							id="phone"
							name="phone"
							value={this.props.detail.phone}
							onChange={this.props.handles.handleName}
							required
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default PersonalDetails;
