import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import { getTemp } from 'data/functions';
import Text from './atoms/Text';

const Wrapper = styled.div`
  margin: 10px;
  transition: margin 0.2s;

  @media screen and (max-width: 900px) {
    margin: 5px;
  }
`;

const Temp = () => {
  const { data, current } = useContext(AppContext);

  return (
    <Wrapper>
      <Text tempMax>{getTemp(data.max_temp)}</Text>
      <Text main>{getTemp(current.temp)}</Text>
      <Text>{getTemp(data.min_temp)}</Text>
    </Wrapper>
  );
};

export default Temp;
