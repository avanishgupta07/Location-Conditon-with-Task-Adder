import axios from 'axios';

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id,
});

export const fetchWeather = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY');
    dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_WEATHER_FAILURE', error });
  }
};
