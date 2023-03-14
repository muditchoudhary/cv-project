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

function changeGitHub(e) {
	this.setState((prevState) => ({
		details: {
			...prevState.details,
			personalDetails: {
				...prevState.details.personalDetails,
				socials: {
					...prevState.details.personalDetails.socials,
					github: {
						...prevState.details.personalDetails.socials.github,
						link: e.target.value,
					},
				},
			},
		},
	}));
}

function changeLinkedIn(e) {
	this.setState((prevState) => ({
		details: {
			...prevState.details,
			personalDetails: {
				...prevState.details.personalDetails,
				socials: {
					...prevState.details.personalDetails.socials,
					linkedin: {
						...prevState.details.personalDetails.socials.linkedin,
						link: e.target.value,
					},
				},
			},
		},
	}));
}

export { changeName, changeLocation, changeMail, changePhone, changeGitHub, changeLinkedIn };
