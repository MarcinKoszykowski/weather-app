import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import { getWind } from 'data/functions';
import windIcon from 'assets/icons/wi-direction-up.svg';
import Pressure from 'components/Element/organisms/Pressure';
import Humidity from 'components/Element/organisms/Humidity';
import Cloudy from 'components/Element/organisms/Cloudy';
import Snow from 'components/Fall/organisms/Snow';
import Rain from 'components/Fall/organisms/Rain';
import Wind from 'components/Wind/Wind';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  padding: 15px 5px;
  transition: padding 0.2s;

  @media screen and (max-width: 1100px) {
    padding: 10px 5px;
  }
  @media screen and (max-width: 700px) {
    padding: 5px;
  }
  @media screen and (max-width: 500px) {
    padding: 10px 0;
  }
`;

const Right = () => {
  const { current } = useContext(AppContext);

  return (
    <Wrapper>
      <Pressure />
      <Humidity />
      <Wind icon={windIcon} text={getWind(current.wind_spd)} dir={current.wind_dir} />
      <Cloudy />
      <Rain />
      <Snow />
    </Wrapper>
  );
};

export default Right;
