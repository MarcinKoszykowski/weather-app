import key from 'data/key';

const url = {
  current: city => `https://api.weatherbit.io/v2.0/current?city=${  city  }&key=${  key}`,
  daily: city =>
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${  city  }&key=${  key  }&days=7`,
};

export default url;
