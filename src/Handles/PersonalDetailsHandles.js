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

	console.log(this.state.details.personalDetails.name);
}

function changeLocation(e) {
	this.setState((prevState) => ({
		...prevState.details,
		personalDetails: {
			...prevState.details.personalDetails,
			location: e.target.value,
		},
	}));
}

export { changeName, changeLocation };
