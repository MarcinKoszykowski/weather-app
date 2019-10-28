import React, { useContext } from 'react';
import AppContext from 'context';
import { getPercent } from 'data/functions';
import cloudIcon from 'assets/icons/wi-cloud.svg';
import Element from '../molecules/Element';

const Cloudy = () => {
  const { current } = useContext(AppContext);

  return <Element icon={cloudIcon} text={getPercent(current.clouds)} />;
};

export default Cloudy;
