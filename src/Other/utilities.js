// This file contains utility methods and data

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

export { fomratDate, formatDescription };
