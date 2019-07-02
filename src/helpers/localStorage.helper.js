const saveState = (name, state) => {
	console.log(state, name);

	window.localStorage.setItem(name, JSON.stringify(state))
};

const loadState = (name) => {
	return JSON.parse(window.localStorage.getItem(name))
};

const storage = {
	saveState: saveState,
	loadState: loadState
};

export default storage;