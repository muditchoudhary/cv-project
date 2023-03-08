import React from "react";
import EducationDetails from "./Components/EducationDetails";
import ExperienceDetails from "./Components/ExperienceDetails";
import PersonalDetails from "./Components/PersonalDetails";
import "./Styles/app.css";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<h1>Resume Generator</h1>
                <PersonalDetails />
                <EducationDetails />
                <ExperienceDetails />
			</div>
		);
	}
}

export default App;
