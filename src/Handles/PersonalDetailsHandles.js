function changeName(e) {
	
	this.setState((prevState) => ({
		details: {
			...prevState.details,
			personalDetails: {
				...prevState.details.personalDetails,
				name: e.target.value,
			},
		},
	}));
}

function changeLocation(e) {
	this.setState((prevState) => ({
		details: {
			...prevState.details,
			personalDetails: {
				...prevState.details.personalDetails,
				location: e.target.value,
			},
		},
	}));
}

function changeMail(e) {
	this.setState((prevState) => ({
		details: {
			...prevState.details,
			personalDetails: {
				...prevState.details.personalDetails,
				mail: e.target.value,
			},
		},
	}));
}

function changePhone(e) {
	this.setState((prevState) => ({
		details: {
			...prevState.details,
			personalDetails: {
				...prevState.details.personalDetails,
				phone: e.target.value,
			},
		},
	}));
}

export { changeName, changeLocation, changeMail, changePhone };
