import axios from 'axios';
import url from 'data/url';
import { routes } from 'data/value';

const getDataFromAPI = async (urlAPI, city) => {
  try {
    const response = await axios.get(urlAPI(city));
    const responseData = await response.data;
    return responseData;
  } catch (err) {
    console.error(err);
  }
  return null;
};

const getDaily = async (city, setData, setDaily) => {
  const daily = await getDataFromAPI(url.daily, city);
  const dailyData = await daily.data;

  await setData(dailyData[0]);
  dailyData.shift();
  await setDaily(dailyData);
};

const getCurrent = async (city, setCurrent) => {
  const current = await getDataFromAPI(url.current, city);
  const currentData = await current.data[0];
  await setCurrent(currentData);
};

const getData = async (city, setCurrent, setData, setDaily) => {
  await getDaily(city, setData, setDaily);
  await getCurrent(city, setCurrent);
};

const toggleError = setError => {
  setError(true);
  setTimeout(() => setError(false), 2500);
};

const formOnSubmit = async (city, history, setCity, setError) => {
  try {
    const response = await axios.get(url.daily(city));
    if (response.status !== 200) {
      toggleError(setError);
    } else {
      setCity(city);
      history.push(routes.details);
    }
  } catch (err) {
    console.error(err);
  }
};

export { getData, formOnSubmit };
