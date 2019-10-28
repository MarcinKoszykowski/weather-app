import React, { useContext } from 'react';
import AppContext from 'context';
import { getFloatWithAccuracy } from 'data/functions';
import rainIcon from 'assets/icons/wi-raindrop.svg';
import Fall from '../molecules/Fall';

const Rain = () => {
  const { current } = useContext(AppContext);

  return <Fall icon={rainIcon} text={getFloatWithAccuracy(current.precip, 2)} />;
};

export default Rain;
