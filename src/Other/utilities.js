// This file contains utility methods and data
import { v4 as uuidv4 } from "uuid";

function fomratDate(startDate, endDate) {
	const months = {
		"01": "January",
		"02": "February",
		"03": "March",
		"04": "April",
		"05": "May",
		"06": "June",
		"07": "July",
		"08": "August",
		"09": "September",
		"10": "October",
		"11": "November",
		"12": "December",
	};

	let startYearVal = startDate.split("-")[0];
	let startMonthVal = startDate.split("-")[1];
	let startMonthName = months[startMonthVal];
	startMonthName = startMonthName.slice(0, 3) + ".";

	let endYearVal = endDate.split("-")[0];
	let endMonthVal = endDate.split("-")[1];
	let endMonthName = months[endMonthVal];
	endMonthName = endMonthName.slice(0, 3) + ".";

	return (
		startMonthName +
		" " +
		startYearVal +
		" - " +
		endMonthName +
		" " +
		endYearVal
	);
}

function formatDescription(description) {
	let descriptions = description.split("-");
	for (let i = 0; i < descriptions.length; i++) {
		if (descriptions[i] !== "") {
			descriptions[i] = descriptions[i].trim();
		} else {
			descriptions.splice(i, 1);
		}
	}

	return descriptions;
}

let details = {
	personalDetails: {
		name: "Kunal Sekhawat",
		location: "Delhi India",
		mail: "kunal123@gamil.com",
		phone: "91888899990",
		socials: {
			github: {
				name: "GitHub",
				link: "https://github.com/kunalsekhawat",
			},
			linkedin: {
				name: "LinkedIn",
				link: "https://www.linkedin.com/in/kunal-sekhawat",
			},
		},
	},
	education: [
		{
			schoolName: "XYZ University",
			schoolLocation: "Banglore, India",
			courseName: "MBA",
			courseStart: "2018-10-01",
			courseEnd: "2020-10-01",
			uniqueId: uuidv4(),
		},
	],

	experience: [
		{
			position: "ABC Job",
			jobStart: "2018-12-01",
			companyName: "XYZ",
			jobEnd: "2019-09-01",
			jobLocation: "Banglore, India",
			jobDescription:
				"- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. - It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. - It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			uniqueId: uuidv4(),
		},
	],
};

export { fomratDate, formatDescription, details };
