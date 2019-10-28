import React, { useContext } from 'react';
import AppContext from 'context';
import { getFloatWithAccuracy } from 'data/functions';
import snowIcon from 'assets/icons/wi-snowflake-cold.svg';
import Fall from '../molecules/Fall';

const Snow = () => {
  const { current } = useContext(AppContext);

  return <Fall icon={snowIcon} text={getFloatWithAccuracy(current.snow, 2)} />;
};

export default Snow;
