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

let initialData = {
    details: {
        personalDetails: {
            name: "Kunal Sekhawat",
            location: "Delhi India",
            mail: "kunal@gamil.com",
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
                schoolName: "IIM Ahemdabad",
                schoolLocation: "Ahemdabad, India",
                courseName: "MBA in Finance",
                courseStart: "2015-09-01",
                courseEnd: "2018-09-01",
                uniqueId: uuidv4(),
            },
        ],

        experience: [
            {
                position: "Product Manager",
                jobStart: "2018-12-01",
                companyName: "XYZ",
                jobEnd: "2019-09-01",
                jobLocation: "Banglore, India",
                jobDescription:
                    "- We deeply believe in creating an inclusive and diverse conference and want to make sure that everyone is able to participate. - We do not want your thirst for knowledge to be limited due to any social or economic hardships. - That is why React India has organized a diversity/scholarship program to help you attend this international event and learn about React from the pros. - We also want to make sure that local students and others residents are able to attend.",
                uniqueId: uuidv4(),
            },
        ],
    },
};

export { fomratDate, formatDescription, initialData };
