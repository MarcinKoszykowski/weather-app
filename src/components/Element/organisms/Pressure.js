import React, { useContext } from 'react';
import AppContext from 'context';
import { getPressure } from 'data/functions';
import pressureIcon from 'assets/icons/wi-barometer.svg';
import Element from '../molecules/Element';

const Pressure = () => {
  const { current } = useContext(AppContext);

  return <Element icon={pressureIcon} text={getPressure(current.pres)} />;
};

export default Pressure;
