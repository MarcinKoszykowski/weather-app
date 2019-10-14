import weaterIcon from 'data/weatherIcon';
import { colorWithOpacity, black } from 'styled/colors';
import moment from 'moment-timezone';

const setTime = (timestamp, timezone) =>
  moment(timestamp * 1000)
    .tz(timezone)
    .format('HH:mm');
const setTemp = temp => `${temp} \xB0C`;
const setPercent = text => `${text} %`;
const setWind = speed => `${parseFloat(speed).toFixed(2)} m/s`;
const setIcon = icon => `assets/icons/${weaterIcon[icon]}.svg`;
const setPressure = pressure => `${parseFloat(pressure).toFixed(0)} hPa`;
const setFloatWithAccuracy = (text, accuracy) => parseFloat(text).toFixed(accuracy);
const setBackgroundColorWithOpacity = opacity =>
  `background-color: ${colorWithOpacity(black, opacity)}`;

export {
  setTime,
  setTemp,
  setPercent,
  setWind,
  setIcon,
  setPressure,
  setFloatWithAccuracy,
  setBackgroundColorWithOpacity,
};
