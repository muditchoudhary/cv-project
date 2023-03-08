import React from "react";
import InputFields from "./InputFields";
import "../Styles/personalDetails.css";

class PersonalDetails extends React.Component {
	render() {
		return (
			<div className="personal-details">
				<h2>Personal Details</h2>
                <hr/>
				<div className="input-form">
					<div className="top">
						<InputFields
							type="text"
							id="name"
							name="name"
							value="First Name"
						/>
						<InputFields
							type="text"
							id="location"
							name="location"
							value="Delhi, India"
						/>
					</div>
                    <div className="bottom">
                        <button type="button">Socials</button>
                        <InputFields
                            type="email"
                            id="email"
                            name="email"
                            value="kunal@gmail.com" />
                        <InputFields
                            type="number"
                            id="phone"
                            name="phone"
                            value="+91999988880" />
                    </div>
				</div>
			</div>
		);
	}
}

export default PersonalDetails;
