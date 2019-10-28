import React, { useContext } from 'react';
import styled from 'styled-components';
import { grey } from 'styled/colors';
import Moonrise from 'components/Sunrise/Sunrise';
import AppContext from 'context';
import { getTime } from 'data/functions';
import Temp from 'components/Temp/Temp';
import { moon } from 'data/value';
import moonriseIcon from 'assets/icons/wi-moonrise.svg';
import moonsetIcon from 'assets/icons/wi-moonset.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  text-align: center;
`;

const Box = styled.div`
  color: ${grey};
  margin: 15px 0;
  transition: margin 0.2s;

  @media screen and (max-width: 1100px) {
    margin: 10px 0;
  }
  @media screen and (max-width: 500px) {
    margin: 5px 0;
  }
  @media screen and (max-width: 350px) {
    margin: 0;
  }
`;

const Center = () => {
  const { data, current } = useContext(AppContext);

  return (
    <Wrapper>
      <Temp />
      <Box>
        <Moonrise title={moon.moonrise} icon={moonriseIcon} time={getTime(data.moonrise_ts, current.timezone)} />
        <Moonrise title={moon.moonset} icon={moonsetIcon} time={getTime(data.moonset_ts, current.timezone)} />
      </Box>
    </Wrapper>
  );
};

export default Center;
