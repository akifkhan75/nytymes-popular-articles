import axios from 'axios';

const API_KEY = 'Sg96AE2iI0mXQrH8QKrAQkFIJpfN1E0E'; // Replace with your NY Times API Key
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json';

export const fetchArticles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?api-key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
