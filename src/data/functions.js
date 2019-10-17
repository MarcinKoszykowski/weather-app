import weatherIcon from 'data/weatherIcon';
import { colorWithOpacity, black } from 'styled/colors';
import moment from 'moment-timezone';

const getTime = (timestamp, timezone) =>
  moment(timestamp * 1000)
    .tz(timezone)
    .format('HH:mm');
const getTemp = temp => `${temp} \xB0C`;
const getPercent = text => `${text} %`;
const getWind = speed => `${parseFloat(speed).toFixed(2)} m/s`;
const getIcon = code => {
  const icon = weatherIcon[code];
  return require(`../assets/icons/${icon}.svg`);
};
const getPressure = pressure => `${parseFloat(pressure).toFixed(0)} hPa`;
const getFloatWithAccuracy = (text, accuracy) => parseFloat(text).toFixed(accuracy);
const getBackgroundColorWithOpacity = opacity => `background-color: ${colorWithOpacity(black, opacity)}`;

export { getTime, getTemp, getPercent, getWind, getIcon, getPressure, getFloatWithAccuracy, getBackgroundColorWithOpacity };
