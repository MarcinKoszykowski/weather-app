import React, { useContext } from 'react';
import AppContext from 'context';
import { getPercent } from 'data/functions';
import humidityIcon from 'assets/icons/wi-humidity.svg';
import Element from '../molecules/Element';

const Humidity = () => {
  const { current } = useContext(AppContext);

  return <Element icon={humidityIcon} text={getPercent(current.rh)} />;
};

export default Humidity;
