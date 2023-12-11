import axios from "axios";

// * get the api key from the .env file
const API_KEY = process.env.REACT_APP_API_KEY;
// * make a variable for the api end point including api key
const NEWS_API_PATH = `https://google.com${API_KEY}`;

export const getDataAPI = async () => {
	let response;
	try {
		response = await axios.get(NEWS_API_PATH);
		response = response.data.articles.slice(0, 15);
	} catch (error) {
		console.log(error);
		return error;
	}
	return response;
};
