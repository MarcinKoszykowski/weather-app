import React, { useContext } from 'react';
import styled from 'styled-components';
import { setTemp } from 'data/functions';
import TempText from 'components/atoms/TempText';
import AppContext from 'context';

const Wrapper = styled.div`
  margin: 10px;
  transition: margin 0.2s;

  @media screen and (max-width: 900px) {
    margin: 5px;
  }
`;

function Temp() {
  const { max_temp: maxTemp, temp, min_temp: minTemp } = useContext(AppContext);
  return (
    <Wrapper>
      <TempText max>{setTemp(maxTemp)}</TempText>
      <TempText main>{setTemp(temp)}</TempText>
      <TempText>{setTemp(minTemp)}</TempText>
    </Wrapper>
  );
}

export default Temp;
