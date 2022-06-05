import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

/*
function registerUser(userData) {
	const url = 'http://localhost:3000/signup'; // api endpoint
	return axios.post(url, userData);
}

function loginUser() {
	const url = 'http://localhost:3000/login';
	return axios.post(url);
}
*/
function registerUser(userData) {
	return instance.post('signup', userData);
}

function loginUser() {
	return instance.post('login');
}

export { registerUser, loginUser };
