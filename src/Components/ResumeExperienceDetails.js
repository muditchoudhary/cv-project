import React from "react";
import ExperienceDisplay from "./ExperienceDisplay";
import "../Styles/resumeExperienceDetails.css"

class ResumeExperienceDetails extends React.Component {
    render() {
        return(
            <div className="resume-experience">
                <h2>Experience</h2>
                <hr />
                {this.props.details.map((detail) => {
					return <ExperienceDisplay detail={detail} key={detail.uniqueId} />;
				})}
            </div>
        )
    }
}

export default ResumeExperienceDetails