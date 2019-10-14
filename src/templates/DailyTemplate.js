import React, { useContext } from 'react';
import styled from 'styled-components';
import { colorWithOpacity, white } from 'styled/colors';
import LeftColumn from 'components/organisms//LeftColumn';
import CenterColumn from 'components/organisms//CenterColumn';
import RightColumn from 'components/organisms//RightColumn';
import City from 'components/atoms/City';
import AppContext from 'context';
import countries from 'data/countries';
import Country from 'components/atoms/Country';

const Box = styled.div`
  background-color: ${colorWithOpacity(white, 0.1)};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  margin: 10px 0 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: margin 0.2s, width 0.2s;

  @media screen and (max-width: 1250px) {
    margin: 10px 0 0 20px;
  }
  @media screen and (max-width: 900px) {
    width: 625px;
    margin: 0 auto 10px;
  }
  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;

function DailyTemplate() {
  const { current } = useContext(AppContext);
  const { city_name: cityName, country_code: countryCode } = current;

  return (
    <Wrapper>
      <City>{cityName}</City>
      <Country>{countries[countryCode]}</Country>
      <Box>
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
      </Box>
    </Wrapper>
  );
}

export default DailyTemplate;
