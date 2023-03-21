function handleNameChange(prevState, nextValue, setPersonalDetials) {
	setPersonalDetials({
		...prevState,
		name: nextValue,
	});
}

function handleLocationChange(prevState, nextValue, setPersonalDetials) {
	setPersonalDetials({
		...prevState,
		location: nextValue,
	});
}

function handleMailChange(prevState, nextValue, setPersonalDetials) {
	setPersonalDetials({
		...prevState,
		mail: nextValue,
	});
}

function handlePhoneChange(prevState, nextValue, setPersonalDetials) {
	setPersonalDetials({
		...prevState,
		phone: nextValue,
	});
}

function handleGithubChange(prevState, nextValue, setPersonalDetials) {
	setPersonalDetials({
		...prevState,
		socials: {
			...prevState.socials,
			github: {
				...prevState.socials.github,
				link: nextValue,
			},
		},
	});
}

function handleLinkedinChange(prevState, nextValue, setPersonalDetials) {
	setPersonalDetials({
		...prevState,
		socials: {
			...prevState.socials,
			linkedin: {
				...prevState.socials.linkedin,
				link: nextValue,
			},
		},
	});
}

export {
	handleNameChange,
	handleLocationChange,
	handleMailChange,
	handlePhoneChange,
	handleGithubChange,
	handleLinkedinChange,
};
