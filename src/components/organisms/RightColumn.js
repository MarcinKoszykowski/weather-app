import React, { useContext } from 'react';
import styled from 'styled-components';
import pressureIcon from 'assets/icons/wi-barometer.svg';
import humidityIcon from 'assets/icons/wi-humidity.svg';
import { setPressure, setPercent } from 'data/functions';
import AppContext from 'context';
import Element from '../molecules/Element';

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

function RightColumn() {
  const { current } = useContext(AppContext);
  const { pres, rh } = current;

  return (
    <Wrapper>
      <Element icon={pressureIcon} text={setPressure(pres)} />
      <Element icon={humidityIcon} text={setPercent(rh)} />
    </Wrapper>
  );
}

export default RightColumn;
