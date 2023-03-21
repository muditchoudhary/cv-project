import React from "react";
import "../Styles/socialPopup.css";

const SocialsPopup = (props) => {
	return (
		<div className="overlay" id="socials-popup">
			<div className="popup">
				<div className="head-sec">
					<h2>Add Socials</h2>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a href="#">x</a>
				</div>
				<div className="content">
					<div>
						<label htmlFor="github">GitHub</label>
						<input
							type="text"
							id="github"
							name="github"
							value={props.socials.github.link}
							onChange={props.changeGitHub}
							required
						/>
					</div>
					<div>
						<label htmlFor="linkedin">LinkedIn</label>
						<input
							type="text"
							id="linkedin"
							name="linkedin"
							value={props.socials.linkedin.link}
							onChange={props.changeLinkedIn}
							required
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SocialsPopup;
